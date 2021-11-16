const { UnAuthorizationResponse, ErrorResponse, ForbiddenError } = require("../constans");
const { User } = require("../models/User");
const moment = require("moment");

let auth = (req, res, next) => {
	let token = req.cookies.w_auth;
	let expired = req.cookies.w_authExp;
	var now = moment().valueOf();
	User.findByToken(token, (err, user) => {
		if (err) return res.status(500).json(ErrorResponse(err));
		if (!user)
			return res.status(403).json(ForbiddenError());
		if(now > expired) {

			user.isAuth = false;
			user.token = "";
			user.tokenExp = null;
			user.save();
			res.status(401).json(UnAuthorizationResponse("Token expired"));
		}
		req.token = token;
		req.user = user;
		next();
	});
};

module.exports = { auth };
