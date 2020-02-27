// console.log("signup js here");

$(document).ready(function() {
	console.log("signup doc ready");

	// Getting references to our form and input
	// var signUpForm = $("#signUpForm");
	const usernameInput = $("#signup-username");
	const emailInput = $("#signup-email");
	const passwordInput = $("#signup-pwd");

	// When the signup button is clicked, we validate the email and password are not blank
	// $("#signup-btn").click(function (event) {
	//   event.preventDefault();
	//   // $("#signUpForm").submit();
	//   console.log("Did it do it?");
	// }).then(function () {
	//   data.redirect("/profile");
	// })

	$("#signUpForm").on("submit", event => {
		event.preventDefault();
		console.log("Did it do it?");
		const userData = {
			username: usernameInput.val().trim(),
			email: emailInput.val().trim(),
			password: passwordInput.val().trim()
		};
		console.log(userData);
		if (!userData.email || !userData.password) {
			return;
		}
		// If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.email, userData.password);
		usernameInput.val("");
		emailInput.val("");
		passwordInput.val("");
	});

	// Does a post to the signup route. If successful, we are redirected to the members page
	// Otherwise we log any errors
	function signUpUser(username, email, password) {
    console.log("sign up user function");
		$.post("/api/signup", {
      username: username,
			email: email,
			password: password
		})
			.then(data => {
        // res.json(data);
        console.log("got here" + data);
        // ifNewUser();
        if(data.message === "success") {
          window.location.replace("/login");
        } else {
          console.log("fail")
        }
				// If there's an error, handle it by throwing up a bootstrap alert
			})
      .catch(handleLoginErr);
  }


	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}
});
