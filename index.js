import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas aquí (ejemplo)
// app.use('/api/usuarios', usuarioRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Servidor corriendo en puerto', process.env.PORT || 5000);
    });
  })
  .catch((err) => console.error(err));
