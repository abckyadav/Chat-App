import React, { useContext } from "react";
import LoginScreen from "./Account/LoginScreen";
import ChatScreen from "./Chat/ChatScreen";
import { AppBar, styled } from "@mui/material";
import { AccountContext } from "../Context/AccountProvider";

const LoginHeader = styled(AppBar)`
  height: 222px;
  box-shadow: none;
  z-index: -1;
`;
const ChatHeader = styled(AppBar)`
  height: 127px;
  box-shadow: none;
  z-index: -1;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account ? (
        <>
          <ChatHeader />
          <ChatScreen />
        </>
      ) : (
        <>
          <LoginHeader />
          <LoginScreen />
        </>
      )}
    </>
  );
};

export default Messenger;
