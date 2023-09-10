const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors('*'));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hello");
});


app.use('/Car/', require('./routers'));


mongoose.connect('mongodb+srv://pavanganesh:pavanganesh@cluster0.axrs7n2.mongodb.net/<database>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Error in connection to database:", err);
});


app.listen(3001, () => {
    console.log("Server is running at port 3001");
});
