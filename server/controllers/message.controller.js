import message from "../models/message";

export const controller = {
  save: (req, res) => {
    const { mensaje, from } = req.body.params;
    const newMessage = new message(mensaje, from);

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
    const query = message.find({ $all });
    query.sort("-_id").exec((error, messages) => {
      return error
        ? res.status(400).send({ mensaje: "Error al obtener mensajes" })
        : messages
        ? res.status(200).send(messages)
        : res.status(500).send({ messages });
    });
  },
};
