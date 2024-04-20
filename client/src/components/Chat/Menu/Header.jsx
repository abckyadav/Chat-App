import { Avatar, Box, styled } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DonutLargeOutlinedIcon from "@mui/icons-material/DonutLargeOutlined";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import HeaderMenu from "./HeaderMenu";


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
  console.log("account:", account);

  return (
    <HeaderContainer>
      <Box>
        <Avatar
          alt={account.name}
          src={account.picture}
          sx={{ cursor: "pointer" }}
        />
      </Box>

      <IconsContainer>
        <GroupsOutlinedIcon color="icon" />
        <DonutLargeOutlinedIcon color="icon" />
        <AddCommentOutlinedIcon color="icon" />
        <HeaderMenu/>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
