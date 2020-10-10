// Pull in our required dependencies (namely express, mongoose and bodyParser)
// Initialize our app using express()
// Apply the middleware function for bodyparser so we can use it
// Pull in our MongoURI from our keys.js file and connect to our MongoDB database
// Set the port for our server to run on and have our app listen on this port

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const port = process.env.PORT || 1111;

// DB Config
const db = process.env.ALTAS_URI;
// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//passsport config
require("./config/passport")(passport);

app.get("/", (req, res) => {
  res.send("welcome");
});
//routes

app.use("/api/users", users);

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
