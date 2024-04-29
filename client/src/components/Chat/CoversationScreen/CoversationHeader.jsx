import { Avatar, Box, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMenu from "../Menu/HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 1rem;
  background: #f0f2f5;
`;
const LeftContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > svg:hover {
    cursor: pointer;
  }
`;
const RightContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > svg:hover {
    cursor: pointer;
  }
`;
const AccountName = styled(Typography)`
  font-size: 1rem;
  color: #111b21;
`;
const AccountStatus = styled(Typography)`
  font-size: 0.8rem;
  color: #667781;
`;

const CoversationHeader = ({ person }) => {

  const [drawerStatus, setDrawerStatus] = useState(false);
  const handleDrawer = () => setDrawerStatus(true);

  return (
    <HeaderContainer>
      <LeftContainer>
        <Box>
          <Avatar
            alt={person.given_name}
            src={person.picture}
            sx={{ cursor: "pointer" }}
            onClick={handleDrawer}
          />
        </Box>
        <Box>
          <AccountName>{person.name}</AccountName>
          <AccountStatus>Offline</AccountStatus>
        </Box>
      </LeftContainer>

      <InfoDrawer open={drawerStatus} setOpen={setDrawerStatus} />

      <RightContainer>
        <SearchIcon color="icon" />
        <HeaderMenu setOpen={setDrawerStatus} />
      </RightContainer>
    </HeaderContainer>
  );
};

export default CoversationHeader;