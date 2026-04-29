import 'dotenv/config';
import express from 'express';
import sequelize from './config/database.js';
import './models/usuario.model.js';
import authRouter from './routes/auth.routes.js'

const app = express();
app.use(express.json());

app.use('/auth', authRouter)

sequelize.sync({ alter: true }).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
  );
});