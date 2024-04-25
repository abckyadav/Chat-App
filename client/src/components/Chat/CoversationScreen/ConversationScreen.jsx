import { Box, styled } from "@mui/material";
import { useContext } from "react";
import CoversationHeader from "./CoversationHeader";
import ConversationMessages from "./ConversationMessages";
import Footer from "./Footer";
import { whatsappChatBackground } from "../../../Constants/data";
import { AccountContext } from "../../../Context/AccountProvider";

const Container = styled(Box)`
  background: url(${whatsappChatBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ConversationScreen = () => {
  const { person } = useContext(AccountContext);
  return (
    <Container>
      <CoversationHeader person={person} />
      <ConversationMessages person={person} />
      <Footer />
    </Container>
  );
};

export default ConversationScreen;
