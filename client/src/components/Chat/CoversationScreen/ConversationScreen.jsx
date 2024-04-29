import { Box, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CoversationHeader from "./CoversationHeader";
import ConversationMessages from "./ConversationMessages";
import Footer from "./Footer";
import { whatsappChatBackground } from "../../../Constants/data";
import { AccountContext } from "../../../Context/AccountProvider";
import { getConversation, getMessage, newMessage } from "../../../service/api";

const Container = styled(Box)`
  background: url(${whatsappChatBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ConversationScreen = () => {
  const { person, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  const [messageValue, setMessageValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState();
  const [fileFromServer, setFileFromServer] = useState("");

  const sendText = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: messageValue,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: fileFromServer,
        };
      }
      await newMessage(message);
      setMessageValue("");
      setFile("");
      setFileFromServer("");
      setNewMessageFlag((prev) => !prev);
    }
  };

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [account.sub, person.sub]);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(conversation?._id);
      setMessages(data);
    };
    conversation?._id && getMessageDetails();
  }, [conversation?._id, newMessageFlag]);

  return (
    <Container>
      <CoversationHeader person={person} />
      <ConversationMessages conversation={conversation} messages={messages} />
      <Footer
        sendText={sendText}
        setMessageValue={setMessageValue}
        messageValue={messageValue}
        file={file}
        setFile={setFile}
        setFileFromServer={setFileFromServer}
      />
    </Container>
  );
};

export default ConversationScreen;
