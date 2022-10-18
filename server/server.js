const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

require('./config/mongoose.config');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

require('dotenv').config();
require("./config/mongoose.config");
require("./routes/activity.routes")(app);
require("./routes/food.routes")(app);

const myFirstSecret = process.env.FIRST_SECRET_KEY;






app.listen(port, ()=> console.log(`Express running on port ${port}`));
