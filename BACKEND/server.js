const express = require('express')
const bodyparser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/authroutes');

const app = express();
const PORT = 3000 || process.env.PORT

//middleware
app.use(bodyparser.json());
app.use(cors());

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => console.log('connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

//Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
   console.log('Server running on http://locahost:${PORT}');
});