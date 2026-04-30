import { User } from "../models/usuario.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function UserRegister(req, res) {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ erro: "Um ou mais campos estão vazios! Preencha todos!" });
    }
    const checkEmailUser = await User.findOne({ where: { email: email } });

    if (checkEmailUser) {
      return res.status(409).json({ erro: "E-mail ja cadastrado!" });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const newUser = await User.create({
      nome,
      email,
      senha: senhaHash,
    });

    const userResponse = newUser.toJSON();
    delete userResponse.senha;
    res.status(201).json(userResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro interno do servidor" });
  }
}

export async function UserLogin(req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        error: "Um ou mais campos estão vazios. Preencha todos os campos!",
      });
    }

    const CheckUser = await User.findOne({ where: { email: email } });

    if (!CheckUser) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const senhaValida = await bcrypt.compare(senha, CheckUser.senha);

    if (!senhaValida) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      {
        id: CheckUser.id,
        nome: CheckUser.nome,
        email: CheckUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN },
    );

    return res.status(200).json({
      token: token,
      usuario: {
        id: CheckUser.id,
        nome: CheckUser.nome,
        email: CheckUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor! " });
  }
}
