import 'dotenv/config';
import express from 'express';
import sequelize from './src/config/database.js';
import './src/models/usuario.model.js';

const app = express();
app.use(express.json());

sequelize.sync({ alter: true }).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
  );
});