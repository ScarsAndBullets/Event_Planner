const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BodyParser Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Express Session
app.use(
	session({
		secret: "keyboard cat",
		saveUninitialized: true,
		resave: true
	})
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Api routes
require("./routes/apiRoutes")(app);

// Send every other request to the React app
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/eventPlannerDb",
	{ useNewUrlParser: true }
);

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
