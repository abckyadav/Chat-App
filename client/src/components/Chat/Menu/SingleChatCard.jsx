import { Box, Typography, styled } from "@mui/material";
import React from "react";

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

const SingleChatCard = ({ user }) => {
  console.log("user:", user.picture);
  return (
    <>
      <Card>
        <CardWrapper>
          <Image src={user.picture} alt={user.given_name} />
        </CardWrapper>
        <Box>
          <Box>
            <Typography>{user.name}</Typography>
            <Typography>message</Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default SingleChatCard;
