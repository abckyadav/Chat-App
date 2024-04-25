import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../Context/AccountProvider";

const Card = styled(Box)`
  display: flex;
  align-items: center;
  height: 70px;
  cursor: pointer;

  &:hover {
    background-color: #f5f6f6;
  }
`;
const CardWrapper = styled(Box)`
  padding: 0 1rem;
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
  const { setPerson } = useContext(AccountContext);

  const getUserDetails = () => {
    setPerson(user);
  };

  return (
    <>
      <Card onClick={() => getUserDetails()}>
        <CardWrapper>
          <Image src={user.picture} alt={user.given_name} />
        </CardWrapper>
        <Box>
          <Box>
            <Typography>{user.name}</Typography>
            <SubText>message</SubText>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default SingleChatCard;
