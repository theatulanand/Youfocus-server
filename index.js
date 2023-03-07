require("dotenv").config()
const express = require('express');
const app = express();
const authRouter = require("./Routes/authRoutes");
const loggerMiddleware = require('./Middlewares/loggerMiddleware');
const dbConnect = require('./Database/database')

// Port
const PORT = process.env.PORT;

// Connecting app with database
dbConnect();

// middleware
app.use(express.json());
app.use(loggerMiddleware)

// Authentication Routes
app.use(authRouter);


// Home
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Youfocus</h1>")
})

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})



