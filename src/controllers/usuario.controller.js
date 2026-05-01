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

export async function updatePerfil(req, res) {
  try {
    const { nome, email, senha } = req.body;

    const usuario = await User.findByPk(req.usuario.id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;
    if (senha) usuario.senha = await bcrypt.hash(senha, 10);

    await usuario.save();

    const userResponse = usuario.toJSON();
    delete userResponse.senha;

    return res.status(200).json(userResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}

export async function deleteAccount(req, res) {
  try {
    const usuario = await User.findByPk(req.usuario.id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    usuario.ativo = false;
    await usuario.save();

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}
