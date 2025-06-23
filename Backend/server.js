const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const router = require('./routers/egRouters')
dotenv.config();//should be next to import coz its runs line by line

const app = express();
const PORT = process.env.PORT;
connectDB();
app.use(express.json()); // to parse JSON bodies
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})