const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const schema = mongoose.Schema

const userSchema = new schema({
  
    qid: { type: Number, required: true },
    ques: { type: String, required: true },
    op1: { type: String, required: true },
    op2: { type: String, required: true },
    op3: { type: String, required: true },
    op4: { type: String, required: true },
    ans: { type: Number, required: true },
  
});

const User = module.exports = mongoose.model('User', userSchema);