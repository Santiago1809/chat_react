import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  mensaje: String,
  from: String,
});

export default model("Mensajes", messageSchema);
