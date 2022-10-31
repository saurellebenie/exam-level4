import express from 'express';
import usersRouter from "./src/user.router.js";
const port = 3000;

const app = express();
app.use(express.json());


// route listener
app.use('/users', usersRouter); 

app.listen(port, () => {
    console.log("backend running on port", port);
    
})