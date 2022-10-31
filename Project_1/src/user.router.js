import  express  from "express";
import userController from "./user.controller.js";
import user from "./user.module.js";

const usersRouter = express.Router()

// add user
usersRouter.post('/', userController.addUser);

// get all user
usersRouter.get('/', userController.getUser);
export default usersRouter;