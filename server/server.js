const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000

require('./config/mongoose.config');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");
require("./routes/activity.routes")(app);







app.listen(port, ()=> console.log(`Express running on port ${port}`));