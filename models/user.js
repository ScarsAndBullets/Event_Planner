const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	firstName: String,
	lastName: String,
	phoneNumber: String
});

const User = mongoose.model("User", userSchema);

module.exports.createUser = function(newUser, callback) {
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(newUser.password, salt, function(err, hash) {
			newUser.password = hash;
			newUser.save(callback);
		});
	});
};
module.exports.getUserByEmail = function(email, callback) {
	const query = { email: username };
	User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		if (err) throw err;
		callback(null, isMatch);
	});
};
module.exports = User;
