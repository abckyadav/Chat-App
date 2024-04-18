import React from "react";
import LoginDialog from "./Account/LoginDialog";
import { AppBar, styled } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Header = styled(AppBar)`
  height: 222px;
  box-shadow: none;
  z-index: -1;
`;

const Messenger = () => {
  return (
    <GoogleOAuthProvider clientId="75251371300-127nghmplqj442veo0pvlltcj0bjpt30.apps.googleusercontent.com">
      <Header />
      <LoginDialog />
    </GoogleOAuthProvider>
  );
};

export default Messenger;
