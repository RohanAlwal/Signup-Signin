const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
dotenv.config();
const app = express()
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/authRoutes');

connectDB();

app.use(express.json());
app.use(cors({ origin: 'https://signup-signin-rho.vercel.app' }));
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(port, () => {
    console.log('mongodb Connected');
  console.log(`Example app listening on port ${port}`)
})