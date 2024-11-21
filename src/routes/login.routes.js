import login from "../services/login.service.js"

import express from "express";

const loginRouter = express.Router();

loginRouter.post('/', login)

export default loginRouter;