import { Avatar, Box, Typography, styled } from "@mui/material";
import React, { useState, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InfoDrawer from "../../drawer/InfoDrawer";
import { AccountContext } from "../../../Context/AccountProvider";
import ConversationHeaderMenu from "./ConversationHeaderMenu";

const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background: #f0f2f5;
  min-height: 65px;
  position: relative;
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
  const { activeUsers } = useContext(AccountContext);

  return (
    <HeaderContainer>
      <LeftContainer>
        <Box>
          <Avatar
            alt={person.given_name}
            src={person.picture}
            sx={{ cursor: "pointer" }}
            // onClick={handleDrawer}
          />
        </Box>
        <Box>
          <AccountName>{person.name}</AccountName>
          <AccountStatus>
            {activeUsers?.find((user) => user.sub === person.sub)
              ? "Online"
              : "Offline"}
          </AccountStatus>
        </Box>
      </LeftContainer>

      <InfoDrawer open={drawerStatus} setOpen={setDrawerStatus} />

      <RightContainer>
        <SearchIcon color="icon" />
        <ConversationHeaderMenu setOpen={setDrawerStatus} />
      </RightContainer>
    </HeaderContainer>
  );
};

export default CoversationHeader;
