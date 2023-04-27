import express from "express";
import morgan from "morgan";
import { Server as SokectServer } from "socket.io";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

let url =
  "mongodb+srv://llitopo72:X7nw38sVixzT1ZWf@cluster0.1fnzvkp.mongodb.net/chat_react";
mongoose.Promise = global.Promise;

const app = express();
const PORT = 4000;

const server = http.createServer(app);
const io = new SokectServer(server, {
  core: {
    origin: "*",
  },
});

app.use(cors());
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

try {
  mongoose.connect(url, {
    useNewUrlParser: true,
  }).then(console.log("Conectados a la base de datos🚀"));
  server.listen(PORT, () => console.log("SERVIDOR EN EL PUERTO", PORT));
} catch (error) {
  console.log(error.message);
}
