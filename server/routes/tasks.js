const express = require('express');
const router = express.Router();
const {
    Task
} = require("../models/Task");

const {
    auth
} = require("../middleware/auth");

//=================================
//             User
//=================================

router.get("/", (req, res) => {
    Task.find({}, null, (err, tasks) => {
        if (err) {
            return res.status(500).json({
                success: false,
                error: err.message
            })
        }
        return res.status(200).json({
            success: true,
            tasks
        })
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
        if (err) return res.json({
            success: false,
            error: err.message
        });
        return res.status(200).json({
            success: true,
            task
        });
    });
});

router.get("/:id", (req, res) => {
    Task.findOne({
        _id: req.params.id
    }, (err, task) => {
        if (err)
            return res.status(500).json({
                success: false,
                error: err.message
            });
        else {
            if (!task)
                return res.status(404).json({
                    success: false,
                    task
                });
            return res.status(200).json({
                success: true,
                task
            });
        }
    });
});

router.delete("/:id", (req, res) => {
    Task.findByIdAndDelete({
        _id: req.params.id
    }, (err, task) => {
        if (err)
            return res.status(500).json({
                success: false,
                error: err.message
            });
        else {
            if (!task)
                return res.status(404).json({
                    success: false,
                    task
                });
            return res.status(202).json({
                success: true,
                task
            });
        }
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({
        _id: req.user._id
    }, {
        token: "",
        tokenExp: ""
    }, (err, doc) => {
        if (err) return res.json({
            success: false,
            err
        });
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;