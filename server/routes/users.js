const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");
const { NotFoundResponse, ErrorResponse, UnAuthorizationResponse } = require("../constans");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
	res.status(200).json({
		_id: req.user._id,
		isAdmin: req.user.role === 0 ? false : true,
		isAuth: true,
		email: req.user.email,
		firstname: req.user.firstname,
		lastname: req.user.lastname,
		birthDate: req.user.birthDate,
		role: req.user.role,
		image: req.user.image,
	});
});

router.post("/register", (req, res) => {

	const user = new User(req.body);

	user.save((err, user) => {
		if (err) return res.status(500).json(ErrorResponse(err));
		return res.status(200).json({
			success: true,
			user
		});
	});
});

router.post("/login", (req, res) => {
	User.findOne({ username: req.body.username }, (err, user) => {
		if (!user)
			return res.status(404).json(NotFoundResponse('user'));

		user.comparePassword(req.body.password, (err, isMatch) => {
			if (!isMatch)
				return res.json(UnAuthorizationResponse('Wrong password'));

			user.generateToken((err, user) => {
				if (err) return res.status(400).send(err);
				res.cookie("w_authExp", user.tokenExp);
				res.cookie("w_isAuth", user.isAuth);
				res
					.cookie("w_auth", user.token)
					.status(200)
					.json({
						success: true, userId: user._id
					});
			});
		});
	});
});

router.get("/logout", auth, (req, res) => {
	User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, user) => {
		if (err) return res.json({ success: false, err });
		return res.status(200).send({
			success: true,
			user
		});
	});
});

router.get("/", (req, res) => {
	User.find({}, null, (err, users) => {
		if (err) {
			return res.status(500).json({
				...ErrorResponse,
				error: err
			});
		}
		return res.status(200).json({
			success: true,
			users
		});
	});
});

module.exports = router;
