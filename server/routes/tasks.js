const express = require('express');
const router = express.Router();
const { Task } = require("../models/Task");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.get("/", (req, res) => {
    Task.find({},null,(err,docs) => {
        if(err) {
            return res.status(500).json({ success: false, error: err.message})
        }
        return res.status(200).json({ success: true, docs})
    });
});

router.post("/createTask", (req, res) => {
    console.log(req.body);
    const task = new Task({
        ...req.body,
        status: 'defined',
        creationTime: new Date()
    });

    task.save((err, doc) => {
        if (err) return res.json({ success: false, error: err.message });
        return res.status(200).json({
            success: true,
            doc
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;
