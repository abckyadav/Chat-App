import { Box, Typography, styled } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import {
  PdfNameExtract,
  formatDate,
  downloadMedia,
} from "../../../utils/commonUtils";
import { AccountContext } from "../../../Context/AccountProvider";
import FileDownload from "@mui/icons-material/FileDownload";
import { iconPDF } from "../../../Constants/data";

const Container = styled(Box)`
  overflow-y: auto;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  /* padding-top: 1rem; */
`;
const ContainerWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 0 4rem 0 6rem;
  gap: 0.2rem;
  height: 100%;
  width: 100%;

  & > div:last-child {
    padding-bottom: 1rem;
  }
`;
const ReceivedText = styled(Box)`
  display: flex;
  justify-content: flex-start;
  width: 60%;
  word-break: break-all;

  & > div {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: #ffffff;
  }
`;
const SentText = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: 60%;
  word-break: break-all;
  margin-left: auto;

  & > div {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: #d9fdd3;
  }
`;
const CutomTypography = styled(Typography)`
  padding: 0.5rem 0.5rem 0.2rem 0.5rem;
  font-size: 0.8rem;
`;
const TimeStaps = styled(Typography)`
  min-width: fit-content;
  font-size: 0.7rem;
  color: #667781;
  padding: 0 0.5rem;
  margin-left: auto;
`;
const PDFAttachmentDiv = styled("div")`
  & svg {
    border: 1px solid grey;
    border-radius: 50%;
  }
`;
const AttachmentDiv = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
  gap: 5px;
  flex-direction: row;

  & svg {
    border: 1px solid grey;
    border-radius: 50%;
  }
  & p {
    margin: 0;
    padding: 0;
  }
`;

const ConversationMessages = ({ messages }) => {
  const { account } = useContext(AccountContext);
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [messages]);

  const TextMessage = ({ message }) => {
    return (
      <div>
        <CutomTypography>{message.text}</CutomTypography>
        <TimeStaps>{formatDate(message.createdAt)}</TimeStaps>
      </div>
    );
  };

  const ImageMessage = ({ message }) => {
    return (
      <>
        {message?.text?.includes(".pdf") ? (
          <PDFAttachmentDiv>
            <div style={{ display: "flex", paddingRight: "0.5rem" }}>
              <img
                src={iconPDF}
                alt={message.name}
                style={{
                  objectFit: "contain",
                  maxHeight: "70px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <CutomTypography>
                  {PdfNameExtract(message.text)}
                </CutomTypography>
                <FileDownload
                  onClick={(e) => downloadMedia(e, message.text)}
                  color="icon"
                  style={{ cursor: "pointer" }}
                  fontSize="small"
                />
              </div>
            </div>
            <TimeStaps>{formatDate(message.createdAt)}</TimeStaps>
          </PDFAttachmentDiv>
        ) : (
          <div style={{ padding: "2px", borderRadius: "0 0 0.5rem 0.5rem" }}>
            <img
              src={message.text}
              alt={message.name}
              style={{ maxWidth: "300px", objectFit: "cover" }}
            />
            <AttachmentDiv>
              <FileDownload
                onClick={(e) => downloadMedia(e, message.text)}
                color="icon"
                style={{ cursor: "pointer" }}
                fontSize="small"
              />
              <TimeStaps>{formatDate(message.createdAt)}</TimeStaps>
            </AttachmentDiv>
          </div>
        )}
      </>
    );
  };

  return (
    <Container>
      <ContainerWrapper>
        {messages &&
          messages.map((message) =>
            account.sub === message.senderId ? (
              <SentText key={message._id} ref={scrollRef}>
                {message.type === "file" ? (
                  <ImageMessage message={message} />
                ) : (
                  <TextMessage message={message} />
                )}
              </SentText>
            ) : (
              <ReceivedText key={message._id} ref={scrollRef}>
                {message.type === "file" ? (
                  <ImageMessage message={message} />
                ) : (
                  <TextMessage message={message} />
                )}
              </ReceivedText>
            )
          )}
      </ContainerWrapper>
    </Container>
  );
};
export default ConversationMessages;
