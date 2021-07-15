const router = require("express").Router();
const userController = require("../controllers/userController");

//route to add a chatlog to the user
router.post("/chatlogs/:user", userController.addChatlog);

//route to get entire chatlog of the user
router.get("/chatlogs/:user", userController.getAllChats);

//route to delete entire chatlog of the user
router.delete("/chatlogs/:user", userController.deleteAllChats);

//route to delete one chat message of the user
router.delete("/chatlogs/:user/:msgid", userController.deleteOneChat);

module.exports = router;
