const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000

require('./config/mongoose.config');

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({extended: true}));

require('dotenv').config();

require("./config/mongoose.config");

require("./routes/activity.routes")(app);

require("./routes/food.routes")(app);






app.listen(port, ()=> console.log(`Express running on port ${port}`));
