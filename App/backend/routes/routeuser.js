const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post("/register", (req, res) => {
    const newUser = new User({
        qid: req.body.qid,
        ques: req.body.ques,
        op1: req.body.op1,
        op2: req.body.op2,
        op3: req.body.op3,
        op4: req.body.op4,
        ans: req.body.ans,
    });
    newUser.save().then(document => {
    res.json({ state: true, msg: "data inserted Successully", document: document })
    .catch(err => {
        res.send(err);
    });
    });
});



router.get("/getuser", (req, res) => {
    User.find().then(document => {
      res.json({ status: 200, message: 'User data fetched Successfully', Userdata: document });
  
    });
  
  });



  module.exports = router;