import Message from "../models/message.js";

const controller = {
  save: (req, res) => {
    const { message, from } = req.body.params;
    const newMessage = new Message(message, from);

    newMessage.save((error, mensageStoraged) => {
      return error || !mensageStoraged
        ? res.status(404).send({
            status: "Error",
            mensaje: "No se pudo enviar el mensaje",
          })
        : res.status(200).send({ mensageStoraged });
    });
  },
  getMessages: (req, res) => {
    const query = Message.find({ $all });
    query.sort("-_id").exec((error, messages) => {
      return error
        ? res.status(400).send({ mensaje: "Error al obtener mensajes" })
        : messages
        ? res.status(200).send(messages)
        : res.status(500).send({ messages });
    });
  },
};
