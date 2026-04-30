import { Router } from "express";
import { UserRegister } from "../controllers/auth.controller.js";
import { UserLogin } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/cadastro", UserRegister);
authRouter.post("/login", UserLogin);

export default authRouter;
