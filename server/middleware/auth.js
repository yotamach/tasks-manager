const { UnAuthorizationResponse } = require("../constans");
const { User } = require("../models/User");
const moment = require("moment");

let auth = (req, res, next) => {
	let token = req.cookies.w_auth;
	let expired = req.cookies.w_authExp;
	var now = moment().valueOf();
	User.findByToken(token, (err, user) => {
		if (err) throw err;
		if (!user)
			return res.json({
				isAuth: false,
				error: true
			});
		if(now > expired) {
			req.cookie("w_authExp", 0);
			req.cookie("w_isAuth", false);
			req.cookie("w_auth", "");
			user.isAuth = false;
			user.token = "";
			user.tokenExp = null;
			user.save();
			res.status(401).json(UnAuthorizationResponse("Token expired"))
		}
		req.token = token;
		req.user = user;
		next();
	});
};

module.exports = { auth };
