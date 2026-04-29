import User from "../models/usuario.model.js";
import bcrypt from "bcryptjs";

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
      senha: senhaHash
    });

    const userResponse = newUser.toJSON();
    delete userResponse.senha;
    res.status(201).json(userResponse);

  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro interno do servidor" });
  }
}
