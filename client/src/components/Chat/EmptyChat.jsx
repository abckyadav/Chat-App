import { Box, Typography, styled } from "@mui/material";
import { emptyChatImage, lockIcon } from "../../Constants/data";

const EmptyChatContainer = styled(Box)`
  background: #f8f9fa;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const EmptyChatWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled("img")`
  width: 400px;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
  margin: 1.5rem 0 1rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;

  & span {
    font-size: 0.7rem;
    background-color: #8080804e;
    padding: 3px 10px;
    border-radius: 50px;
    font-weight: 600;
  }
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  font-family: inherit;
  color: #667781;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
`;

const EncryptionMessage = styled(Box)`
  position: absolute;
  bottom: 1rem;

  font-size: 14px;
  font-family: inherit;
  color: #667781;
  font-weight: 400;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Link = styled("a")`
  text-decoration: none;
  margin-left: 5px;
  color: #00a884;
`;

const EmptyChat = () => {
  return (
    <EmptyChatContainer>
      <EmptyChatWrapper>
        <Image alt="emptychat" src={emptyChatImage} />
        <Title>
          WhatsApp Web <span>NEW</span>
        </Title>
        <SubTitle>
          Now send and receive messages without keeping your phone online.
        </SubTitle>
        <SubTitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </SubTitle>
        <SubTitle sx={{ marginTop: "2rem" }}>
          Make calls from desktop with WhatsApp for Windows.{" "}
          <Link
            target="blank"
            href="https://www.microsoft.com/store/productId/9NKSQGP7F2NH?ocid=pdpshare"
          >
            {"  "}
            Get it here.
          </Link>
        </SubTitle>

        <EncryptionMessage>
          {lockIcon} Your personal messages are end-to-end encrypted
        </EncryptionMessage>
      </EmptyChatWrapper>
    </EmptyChatContainer>
  );
};

export default EmptyChat;
