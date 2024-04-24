import { addUser, getUser } from "../controller/userController.js";
import express from "express";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

export default route;
