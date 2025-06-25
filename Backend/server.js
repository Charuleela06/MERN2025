const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const router = require('./routers/egRouters');      
const todorouter = require('./routers/todoRouters');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API routes
app.use(router);          
app.use('/todo', todorouter);    

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
}); 