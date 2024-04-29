import {
  newConversation,
  getConversation,
} from "../controller/conversationController.js";
import { uploadFile, getFile } from "../controller/fileController.js";
import { getMessage, newMessage } from "../controller/messageController.js";
import { addUser, getUser } from "../controller/userController.js";
import express from "express";
import upload from "../utils/upload.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getFile);

export default route;
