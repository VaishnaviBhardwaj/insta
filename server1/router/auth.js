const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypts = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requireLogin = require("../middleware/requireLogin");

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/protected", requireLogin, (req, res) => {
  res.send("hello user");
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    res.status(422).json({ error: "please enter all the field" });
  }
  User.findOne({ email: email })
    .then((savedUSer) => {
      if (savedUSer) {
        return res
          .status(422)
          .json({ error: "user already  exists with that email" });
      }
      bcrypts.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "Successfuly signup" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })

    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add email or password" });
  }
  User.findOne({ email: email }).then((savedUSer) => {
    if (!savedUSer) {
      return res.status(422).json({ error: "Invalid email or password" });
    }
    bcrypts.compare(password, savedUSer.password).then((doMAtch) => {
      if (doMAtch) {
        // return res.json({ message: "sucessfully signed in " });
        const token = jwt.sign({ _id: savedUSer._id }, JWT_SECRET);
        res.json({ token });
      } else {
        return res.status(422).json({ error: "Invalid email or password" });
      }
    });
    // .catch(err=>{
    //     console.log(err)
    // });
  });
});

module.exports = router;
