import rateLimit from "express-rate-limit";

export const limiteGlobal = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 200,
  message: {
    message: "Muitas requisições deste IP. Tente novamente em 10 minutos.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const limiteLocal = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutos
  max: 10,
  message: {
    message: "Muitas tentativas de acesso. Bloqueado por 10 minutos.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
