import express from 'express';
import { createServer } from 'http';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

connectDB().then(() => {
  const server = createServer(app);
  const PORT = process.env.PORT || 8888;
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
});
