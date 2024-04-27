import {
  newConversation,
  getConversation,
} from "../controller/conversationController.js";
import { getMessage, newMessage } from "../controller/messageController.js";
import { addUser, getUser } from "../controller/userController.js";
import express from "express";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

export default route;
