import { Sequelize } from 'sequelize';
import 'dotenv/config'; // Garante o carregamento do .env em desenvolvimento

// 1. Desestruturação para clareza e validação
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT
} = process.env;

// 2. Fail Fast: Validação estrita das credenciais
if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST) {
  throw new Error(' Erro Crítico: Variáveis de ambiente do banco de dados ausentes. Verifique seu arquivo .env.');
}

// 3. Instanciação do Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT || 5432, 
  dialect: 'postgres',
  logging: false,
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000  
  }
});

export default sequelize;