const express = require('express');
const app = express();
require('./server/config/mongoose.config');
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/athletes.routes')(app);

app.listen(8000, () => {
    console.log("Listening at port 8000");
})