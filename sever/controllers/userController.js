const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registration = async (req, res) => {
    try {
        if (req.body.username == "" || req.body.email == "" || req.body.password == "") {
            res.status(400).json({
                message: "incomplete field"
            })

        } else {
            const user = await userModel.findOne({
                email: req.body.email,
            })
            if (user) {
                res.status(409).json({
                    message: "user exist"

                })
            } else {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(req.body.password, salt)
                const data = userModel({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashPassword,
                })
                await data.save();
                res.status(201).json({
                    message: "user created successfully"
                })

            }
        }

    } catch (error) {
        console.log(error);
    }

}

module.exports.login = async (req, res) => {
    try {
        if (req.body.email == "" || req.body.password == "") {
            res.status(400).json({
                message: "invalid users"
            })
        } else {
            const user = await userModel.findOne({
                email: req.body.email,
            })
            if (user) {
                const verifyUser = await bcrypt.compare(req.body.password, user.password)
                if (verifyUser) {
                    res.status(200).json({
                        message: user
                    })
                }


            } else {
                res.status(404).json({
                    message: "user not found"
                })
            }

        }

    } catch (error) {

    }
}
