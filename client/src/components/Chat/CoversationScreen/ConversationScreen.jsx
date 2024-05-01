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
  position: static;
`;

const ConversationScreen = () => {
  const { person, account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  const [messageValue, setMessageValue] = useState("");
  const [messages, setMessages] = useState([]);

  const [file, setFile] = useState();
  const [fileFromServer, setFileFromServer] = useState("");
  const [incomingMessages, setIncomingMessages] = useState(null);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      console.log("getMessage: data:", data);
      setIncomingMessages({
        ...data,
        createdAt: Date.now(),
      });
    });
    console.log("messages:", messages);
  }, [messages, socket]);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(conversation?._id);
      setMessages(data);
    };
    conversation?._id && getMessageDetails();
  }, [conversation?._id, newMessageFlag]);

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
    incomingMessages &&
      conversation?.members?.includes(incomingMessages.senderId) &&
      setMessages((prev) => [...prev, incomingMessages]);
  }, [incomingMessages, conversation]);

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

      socket.current.emit("sendMessage", message);

      await newMessage(message);
      setMessageValue("");
      setFile("");
      setFileFromServer("");
      setNewMessageFlag((prev) => !prev);
    }
  };

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
