const express = require('express');
const cors = require('cors'); //cross origin requests

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth.js');

require('dotenv').config();

app.use(cors());
app.use(express.json()); //allow to pass json payloads from the frontend to the backend
app.use(express.urlencoded());


app.use("/auth", authRoutes)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));