import express from 'express';
import { createServer } from 'http';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoute from './routes/productRoute.js';
import studentRoute from './routes/studentRoute.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/products', productRoute);
app.use('/students', studentRoute);

connectDB().then(() => {
  const server = createServer(app);
  const PORT = process.env.PORT || 8888;
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
});
