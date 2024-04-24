import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ConnectMongoDB from "./database/db.js";
import Route from "./routes/route.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
  ConnectMongoDB();
});
