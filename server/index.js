const express = require('express');
const app = express();
const cors = require('cors');
const indexRouter = require('./routes/Index');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', indexRouter);



app.listen(3000, () => {
    console.log("server running successfully");
})