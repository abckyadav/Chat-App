import { Box, Typography, styled } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import { getConversation, setConversation } from "../../../service/api";
import { formatDate } from "../../../utils/commonUtils";

const Card = styled(Box)`
  display: flex;
  align-items: center;
  height: 70px;
  cursor: pointer;

  &:hover {
    background-color: #f5f6f6;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #f0f2f5;
  `}
`;
const CardWrapper = styled(Box)`
  padding: 0 1rem;
`;
const MessageWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 1rem;
`;

const Image = styled("img")`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const SubText = styled(Typography)`
  font-size: 0.8rem;
  color: #667781;
`;

const SingleChatCard = ({ user }) => {
  const { account, person, setPerson, newMessageFlag } =
    useContext(AccountContext);
  // eslint-disable-next-line no-unused-vars
  const [isSelected, setIsSelected] = useState(false);
  const [latestMessage, setLatestMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });

      setLatestMessage({ text: data?.message, timestaps: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageFlag]);

  const getUserDetails = async () => {
    setPerson(user);
    setIsSelected(true);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <>
      <Card
        isSelected={person && person.sub === user.sub}
        onClick={() => getUserDetails()}
      >
        <CardWrapper>
          <Image src={user.picture} alt={user.given_name} />
        </CardWrapper>
        <MessageWrapper>
          <Box>
            <Typography>{user.name}</Typography>
            <SubText>
              {latestMessage?.text?.includes("onrender")
                ? "media"
                : latestMessage.text}
            </SubText>
          </Box>
          <Box>
            {latestMessage?.text && (
              <SubText>{formatDate(latestMessage?.timestaps)}</SubText>
            )}
          </Box>
        </MessageWrapper>
      </Card>
    </>
  );
};

export default SingleChatCard;
