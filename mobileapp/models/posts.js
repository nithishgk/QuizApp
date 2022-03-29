const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    score:Number,
    lang:String,
    level:Number,
    description: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})

module.exports = mongoose.model('Question', QuestionSchema)
