import decode from 'jwt-decode';
import axios from 'axios';

export default {
  // logs in user
  submitLogin: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};

export class AuthService {

  login = (email, password) => {
    // Get a token
    return axios.post('/api/user/login', { email: email, password: password })
      .then(res => {
        // set the token once the user logs in
        // once the  backend is setup we can use this.
        // this.setToken(res.data.token);

        //hardcoding token for now
        this.setToken('faketoken');



        // return the rest of the response
        return res;
      });
  };

  getProfile = () => {
    // return decode(this.getToken());
    return decode(this.getToken());
  };

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token) // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      else
        return false;
    }
    catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    // Saves user token to localStorage
    axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    axios.defaults.headers.common['Authorization'] = null;
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.reload('/');
  }



}
