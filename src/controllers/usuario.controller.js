import { json } from "sequelize";
import { User } from "../models/usuario.model.js";
import bcrypt from "bcryptjs";

export async function getPerfil(req, res) {
  try {
    const usuario = await User.findByPk(req.usuario.id, {
      attributes: { exclude: ["senha"] },
    });

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}
