import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import allRoutes from './routes/index.js';
import path from 'path' ;

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 8000;




// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

// routes


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://task-management-frontend-cg1s.onrender.com");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.options("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://task-management-frontend-cg1s.onrender.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  res.send();
});
app.use('/api', allRoutes);

// error handler
// eslint-disable-next-line
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(status).json({ message, stack: err.stack });
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
// });

const connectDB = async () => {
  try {
    console.log(process.env.DB_CONNECTION_STRING)
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});