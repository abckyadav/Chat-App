import MessageModel from "../model/messageModel.js";
import ConversationModel from "../model/conversationModel.js";

export const newMessage = async (req, res) => {
  try {
    const message = new MessageModel(req.body);

    await message.save();
    await ConversationModel.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    return res.status(200).json("Message sent successfully");
  } catch (error) {
    return res
      .status(500)
      .json("error in newMessage Controller:", error.message);
  }
};

export const getMessage = async (req, res) => {
  try {
    const message = await MessageModel.find({ conversationId: req.params.id });
    return res.status(200).json(message);
  } catch (error) {
    return res
      .status(500)
      .json("error in getMessage Controller:", error.message);
  }
};
