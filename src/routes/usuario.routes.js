import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import {
  getPerfil,
  updatePerfil,
  deleteAccount,
} from "../controllers/usuario.controller.js";

const usuarioRouter = Router();

usuarioRouter.get("/perfil", auth, getPerfil);
usuarioRouter.put("/perfil", auth, updatePerfil);
usuarioRouter.delete("/conta", auth, deleteAccount);

export default usuarioRouter;
