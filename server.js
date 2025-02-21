import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import taskRoutes from './routes/task.routes.js';
import personRoutes from './routes/person.routes.js';

const app = express();
const PORT = process.env.PORT || 3000; // Usa a porta do .env ou 3000 como fallback

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com o Banco de Dados
connectDB();

// Rotas
app.use('/api/tasks', taskRoutes);
app.use('/api/people', personRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});