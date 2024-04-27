import ConversationModel from "../model/conversationModel.js";

export const newConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const exist = await ConversationModel.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (exist) {
      return res.status(200).json("conversation already exist");
    }

    const newConversation = new ConversationModel({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    return res.status(200).json("Conversation saved successfully");
  } catch (error) {
    return res.status(500).json("error in  newConversation:", error.message);
  }
};

export const getConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const conversation = await ConversationModel.findOne({
      members: { $all: [senderId, receiverId] },
    });
    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(500).json("error in  getConversation:", error.message);
  }
};
