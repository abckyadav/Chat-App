import { Avatar, Box } from "@mui/material";
import React, { useContext } from "react";
import AccountProvider from "../../../Context/AccountProvider";

const MenuHeader = () => {
  const { account } = useContext(AccountProvider);

  return (
    <Box>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </Box>
  );
};

export default MenuHeader;
