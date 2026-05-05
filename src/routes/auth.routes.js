import { Router } from "express";
import { UserRegister } from "../controllers/auth.controller.js";
import { UserLogin } from "../controllers/auth.controller.js";
import { limiteLocal } from "../config/rateLimit.config.js";

const authRouter = Router();

authRouter.post("/cadastro", limiteLocal, UserRegister);
authRouter.post("/login", limiteLocal, UserLogin);

export default authRouter;
