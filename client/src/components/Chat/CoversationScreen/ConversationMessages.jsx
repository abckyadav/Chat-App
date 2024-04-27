import { Box, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { formatDate } from "../../../utils/commonUtils";
import { AccountContext } from "../../../Context/AccountProvider";

const Container = styled(Box)`
  overflow-y: auto;
  flex: 1 1 auto;

  display: flex;
  align-items: flex-end;

  &::-webkit-scrollbar {
    width: 12px;
  }
  /* For Firefox */
  &::-moz-scrollbar {
    width: 12px;
  }
  /* For Internet Explorer and Edge */
  &::-ms-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #88888895;
    border-radius: 10px;
  }
`;

const ContainerWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 1rem 4rem 1rem 6rem;
  gap: 0.2rem;

  width: 100%;
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
  padding-right: 0.5rem;
  margin-left: auto;
`;

const ConversationMessages = ({ messages }) => {
  console.log("messages:", messages);
  const { account } = useContext(AccountContext);

  return (
    <Container>
      <ContainerWrapper>
        {messages &&
          messages.map((message) =>
            account.sub === message.senderId ? (
              <SentText key={message._id}>
                <div>
                  <CutomTypography>{message.text}</CutomTypography>
                  <TimeStaps>{formatDate(message.createdAt)}</TimeStaps>
                </div>
              </SentText>
            ) : (
              <ReceivedText key={Math.random()}>
                <div>
                  <CutomTypography>{message.text}</CutomTypography>
                  <TimeStaps>{formatDate(message.createdAt)}</TimeStaps>
                </div>
              </ReceivedText>
            )
          )}
      </ContainerWrapper>
    </Container>
  );
};
export default ConversationMessages;
