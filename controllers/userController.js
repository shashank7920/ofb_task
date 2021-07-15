const ChatLogs = require("../model/chatLogModel");
var mongoose = require("mongoose");

const userController = {
  addChatlog: async (req, res) => {
    try {
      const message = req.body.message;
      const isSent = req.body.isSent;
      const user = req.params.user;

      const newChat = new ChatLogs({
        message: message,
        isSent: isSent,
        nameOfUser: user,
      });

      await newChat.save();
      res.json({ newChat });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllChats: async (req, res) => {
    try {
      const userInparam = req.params.user;
      const chats = await ChatLogs.find({ nameOfUser: userInparam });
      res.json({ chats });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteAllChats: async (req, res) => {
    try {
      const userInparam = req.params.user;

      const chats = await ChatLogs.deleteMany({ nameOfUser: userInparam });
      res.json({ msg: "Delete all chats of this user" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteOneChat: async (req, res) => {
    try {
      const msgId = mongoose.Types.ObjectId(req.params.msgid);
      await ChatLogs.findByIdAndDelete(msgId);
      res.json({ msg: "Delete this chat of the user" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userController;
