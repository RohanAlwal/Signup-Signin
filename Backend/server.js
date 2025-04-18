const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const app = express()
const port = 3000
const authRoutes = require('./routes/authRoutes');

connectDB();

app.use(express.json());
// app.use(cors());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(port, () => {
    console.log('mongodb Connected');
  console.log(`Example app listening on port ${port}`)
})