import user from "../src/user.module.js";
const userController = {};

// add a new user
userController.addUser = (req, res) =>{
    const newUser = req.body;
    user.push(newUser),

    res.send({
        status: 200,
        message: "User account successfully created",
        user: newUser
    });
}
// get all the user
userController.getUser = (req, res) =>{
    res.send(user)
}
export default userController;