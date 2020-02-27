const db = require("../models");
require("dotenv").config();
const passport = require("../config/passport");

module.exports = app => {
	// app.post for login
	app.post("/api/login", passport.authenticate("local"), (req, res) => {
		res.json(req.user)
	});

	// app.post for signup
	app.post("/api/signup", (req, res) => {
		db.User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password
		})
			.then(() => {
				res.json({ message: "success" });
				// res.redirect(307, '/login')
			})
			.catch(e => {
				res.status(401).json(e);
			});
	});

	// app.get for logout
	app.get("/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});

	// Route for getting some data about our user to be used client side
	app.get("/api/user_data", (req, res) => {
		if (!req.user) {
			res.json({});
		} else {
			res.json({
				email: req.user.email,
				id: req.user.id
			});
		}
	});
};
