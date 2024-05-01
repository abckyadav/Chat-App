import { Box, Dialog, styled } from "@mui/material";
import { useContext } from "react";
import Menu from "./Menu/Menu";
import EmptyChat from "./EmptyChat";
import ConversationScreen from "./CoversationScreen/ConversationScreen";
import { AccountContext } from "../../Context/AccountProvider";

const dialogStyle = {
  height: "95vh",
  width: "100%",
  margin: "20px",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: 0,
  overflow: "hidden",
  boxShadow: "0 6px 18px rgba(11, 20, 26), .05)",
};

const Container = styled("div")`
  display: flex;
  height: 100%;
`;

const LeftContainer = styled(Box)`
  @media screen and (min-width: 1300px) {
    flex: 0 0 30%;
    max-width: 30%;
  }
  @media screen and (min-width: 901px) and (max-width: 1300px) {
    flex: 0 0 40%;
    max-width: 40%;
  }
  @media screen and (max-width: 900px) {
    flex: 0 0 45%;
    max-width: 45%;
  }
`;

const RightContainer = styled(Box)`
  flex-grow: 1;
  border-left: 1px solid #e9edef;
  background: #f0f2f5;
`;

const ChatScreen = () => {
  const { person } = useContext(AccountContext);
  console.log("person:", person);

  return (
    <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: dialogStyle }}>
      <Container>
        <LeftContainer>
          <Menu />
        </LeftContainer>

        <RightContainer>
          {person && Object.keys(person).length > 0 ? (
            <ConversationScreen />
          ) : (
            <EmptyChat />
          )}
        </RightContainer>
      </Container>
    </Dialog>
  );
};

export default ChatScreen;
