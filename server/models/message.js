import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  message: String,
  from: String,
});

export default model("Message", messageSchema);
