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
    padding: 5px 10px;
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

const Spacer = styled(Box)`
  height: 200px;
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
        <Spacer />
        <SubTitle>
          {lockIcon} Your personal messages are end-to-end encrypted
        </SubTitle>
      </EmptyChatWrapper>
    </EmptyChatContainer>
  );
};

export default EmptyChat;
