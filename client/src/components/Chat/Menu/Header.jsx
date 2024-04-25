import { Avatar, Box, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 1rem;
  background: #f0f2f5;
`;
const IconsContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > svg:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const { account } = useContext(AccountContext);
  // console.log("account:", account);
  const [drawerStatus, setDrawerStatus] = useState(false);
  const handleDrawer = () => setDrawerStatus(true);

  return (
    <HeaderContainer>
      <Box>
        <Avatar
          alt={account.name}
          src={account.picture}
          sx={{ cursor: "pointer" }}
          onClick={handleDrawer}
        />
      </Box>

      <InfoDrawer open={drawerStatus} setOpen={setDrawerStatus} />

      <IconsContainer>
        <GroupsOutlinedIcon color="icon" />
        <DonutLargeOutlinedIcon color="icon" />
        <AddCommentOutlinedIcon color="icon" />
        <HeaderMenu setOpen={setDrawerStatus} />
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
