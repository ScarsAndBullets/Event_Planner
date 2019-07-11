import axios from "axios";

export default {
	// logs in user
	submitLogin: function(login) {
		return axios.post("/api/user/login", login);
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
