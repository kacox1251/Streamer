// var Show = require("../models/shows");
const db = require("../models");
require("dotenv").config();
const passport = require("../config/passport");
const axios = require("axios");
// use process.env.API_KEY when needing to use the api key anywhere else?

module.exports = function (app) {
	//app.get for bringing in most popular movies for index.html carousel
	app.get("/index", function (req, res) {
		const queryURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1&region=US`;
		axios
			.get(queryURL)
			.then(function (data) {
				console.log("top rates movies" + data);
				res.json(data);
			})
			.catch(function (e) {
				res.json(e);
			});
	});

	//app.get for bringing in most popular shows for index.html carousel
	app.get("/index", function (req, res) {
		const queryURL = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`;
		axios
			.get(queryURL)
			.then(function (data) {
				console.log("on air tv" + data);
				res.json(data);
			})
			.catch(function (e) {
				res.json(e);
			});
	});

	//app.get for bringing in individual user's to watch for carousel
	app.get("/api/profile/:id", function (req, res) {
		// Here we add an "include" property to our options in our findOne query
		// We set the value to an array of the models we want to include in a left outer join
		db.Show.findOne({
			where: {
				id: req.params.id
			},
			include: [db.User]
		}).then(function (result) {
			res.json(result);
		});
	});

	// app.post for login
	app.post("/api/login", passport.authenticate("local"), function (req, res) {
		res.json(req.user);
	});

	// app.post for signup
	app.post("/api/signup", function (req, res) {
		db.User.create({
			email: req.body.email,
			password: req.body.password
		})
			.then(function () {
				res.redirect(307, "/api/login");
			})
			.catch(function (err) {
				res.status(401).json(err);
			});
	});

	// app.get for logout
	app.get("/logout", function (req, res) {
		req.logout();
		res.redirect("/");
	});

	// app.get for user_data (DO WE NEED THIS ONE?)
	app.get("/api/user_data", function (req, res) {
		if (!req.user) {
			res.json({});
		} else {
			res.json({
				email: req.user.email,
				id: req.user.id
			});
		}
	});

	// app.get for getting info from our database for user watchlist
	// join with user and shows where user_id in shows equals user id and also where want_to_watch is true
	app.get("/api/user/:id", function (req, res) {
		db.Show.findAll({
			where: {
				id: req.body.id
			}
		});
	});

	// app.get info from movie db for specific title info
	// DOES THIS NEED A SEARCH BEFORE THE WILDCARD IN THE ROUTE OR CAN WE CUT THAT OUT OF THE ROUTE
	app.get("/api/search/:title", function (req, res) {
		const title = req.body.title;
		const queryURL = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`;
		axios
			.get(queryURL)
			.then(function (data) {
				res.json(data);
			})
			.catch(function (e) {
				res.json(e);
			});
	});

	// app.post for search (the example that lindsay showed)
	app.post("/api/search", function (req, res) {
		const title = req.body.title;
		const queryURL = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`;
		axios
			.get(queryURL)
			.then(function (data) {
				res.json(data);
			})
			.catch(function (e) {
				res.json(e);
			});
	});

	// create show function
	function createShow(movie) {
		app.post("/api/selected", function (req, res) {
			db.Show.create({
				api_id: req.body.api_id,
				title: req.body.title,
				genre: req.body.genre,
				want_to_watch: true,
				watching: false,
				completed: false

			}).then(function (results) {
				res.end();
			})
		})
	}
	// update show function
	function updateShow(movie) {
		app.put("/api/profile/watching/:id", function (req, res) {
			db.Show.update(
				{ want_to_watch: false },
				{ watching: true },
				{ where: req.params.id }
			).then(function (response) {
				res.json(response)
			})
		})
	}

	// get absolutely needs url param, but a url param 
	app.get("/api/selected/:id", function (req, res) {
		let show = {
			user_id: req.params.id,
			api_id: api_id,
			title: title,
			genre: genre,
			want_to_watch: want_to_watch,
			watching: watching,
			complete: complete
		};
		db.Show.findAll({
			where: {
				user_id: req.params.id,
				api_id: api_id
			}
		}).then(function (data) {
			console.log(data);
			if (!data) {
				db.Show.create(show)
			} else {
				db.Show.udpate(show)
			}
		}).then(function () {
			res.redirect("/profile");
		})
	});

	// app.put for switching a title to watching

	// app.put for switching a title to completed

	// app.delete for removing from list completely

	//app.get for bringing in individual user's watchlist for carousel
	app.get("/api/users/:id", function (req, res) {
		db.User.findOne({
			// where: {
			//   id: //how are we grabbing this from the currently logged in data?
			// },
			include: [db.Show]
		}).then(data => {
			//am I understanding correctly that this would be the information pulled
			// from the database and allow me to pull their movie titles etc?
			res.json(data);
		});
	});

};


//delete show from all watch lists
app.delete("/api/selected/:id", function (req, res) {
	db.Show.destroy({
		where: {
			// foreignKey: //user id
			// api_id: //show's data-movie info
		}
	})
		// is this set up properly?
		.then(function () {
			// I think this can just be an end
			res.end();
		});
});