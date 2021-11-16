const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = mongoose.Schema({
	firstname: {
		type:String,
		maxlength:50
	},
	email: {
		type:String,
		trim:true,
		required: [true, "Enter a email."],
		unique: [true, "email already taken"]
	},
	username: {
		type:String,
		trim:true,
		required: [true, "Enter a username."],
		unique: [true, "username already taken"],
	},
	password: {
		type: String,
		minglength: 6,
		required: [true, "Enter a password."],
	},
	lastname: {
		type:String,
		maxlength: 50
	},
	birthDate: {
		type: Date,
	},
	role : {
		type:Number,
		default: 0 
	},
	image: String,
	token : {
		type: String,
	},
	tokenExp :{
		type: Number
	},
	isAuth :{
		type: Boolean,
		default: false
	}
});

userSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });


userSchema.pre("save", function( next ) {
	var user = this;
	if(user.isModified("password")){
		// console.log('password changed')
		bcrypt.genSalt(saltRounds, function(err, salt){
			if(err) return next(err);
			bcrypt.hash(user.password, salt, function(err, hash){
				if(err) return next(err);
				user.password = hash;
				next();
			});
		});
	} else {
		next();
	}
});

userSchema.methods.comparePassword = function(plainPassword,cb){
	bcrypt.compare(plainPassword, this.password, function(err, isMatch){
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

userSchema.methods.generateToken = function(cb) {
	var user = this;
	var token =  jwt.sign(user._id.toHexString(),"secret");
	var oneHour = moment().add(1, "hour").valueOf();

	user.tokenExp = oneHour;
	user.token = token;
	user.isAuth = true;
	user.save(function (err, user){
		if(err) return cb(err);
		cb(null, user);
	});
};

userSchema.statics.findByToken = function (token, cb) {
	var user = this;

	jwt.verify(token,"secret",function(err, decode){
		user.findOne({"_id":decode, "token":token}, function(err, user){
			if(err) return cb(err);
			cb(null, user);
		});
	});
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
