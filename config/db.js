import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente do .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Usa a URI do .env
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro de conexão ao MongoDB:', error.message);
    process.exit(1); // Encerra o processo em caso de erro
  }
};

export default connectDB;