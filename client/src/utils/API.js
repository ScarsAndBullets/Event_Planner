import decode from "jwt-decode";
import axios from "axios";

export default {
	submitSignup: function(signup) {
		return axios.post("/api/user/signup", signup);
	},
	//Get users events to populate event dashboard
	getEvents: function() {
		return axios.get("/api/events/event-dashboard");
	},
	// Deletes the book with the given id
	deleteBook: function(id) {
		return axios.delete("/api/books/" + id);
	},
	// Saves a book to the database
	saveBook: function(bookData) {
		return axios.post("/api/books", bookData);
	}
};

export class AuthService {
	login = login => {
		// Get a token
		return axios
			.post("/api/user/login", { email: login.email, password: login.password })
			.then(res => {
				console.log(res);
				return res;
			});
	};

	getProfile = () => {
		// return decode(this.getToken());
		return axios.get("/api/user/current").then(res => {
			return res;
		});
	};

	loggedIn() {
		return this.getProfile();
	}

	isTokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				return true;
			} else return false;
		} catch (err) {
			return false;
		}
	}

	setToken(idToken) {
		// Saves user token to localStorage
		axios.defaults.headers.common["Authorization"] = `Bearer ${idToken}`;
		localStorage.setItem("id_token", idToken);
	}

	getToken() {
		// Retrieves the user token from localStorage
		return localStorage.getItem("id_token");
	}

	logout() {
		// Clear user token and profile data from localStorage
		axios.defaults.headers.common["Authorization"] = null;
		localStorage.removeItem("id_token");
		// this will reload the page and reset the state of the application
		window.location.reload("/");
	}
}
