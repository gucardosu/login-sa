import jwt from "jsonwebtoken";

export function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token ausente ou mal formatado. " });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payloadDecoder = jwt.verify(token, process.env.JWT_SECRET);

    req.usuario = payloadDecoder;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido ou expirado!" });
  }
}
