import { Router } from "express";
import { UserRegister } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post('/cadastro', UserRegister)


export default authRouter