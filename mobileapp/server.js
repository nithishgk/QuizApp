const { Console } = require('console');
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const routes = require('./routes') 
const cors = require('cors') 
const mongoose =require('mongoose');
const { MONGO_URI } = require('./config');
//const Question = require('./models/posts');

//middleware
app.use(bodyParser.json());

app.post('/questions', async (req, res) => {
    try {
        const {score} = req.body
        const {lang} =req.body
        const {level}=req.body
        const { description } = req.body
        const { alternatives } = req.body
         const question = await Question.create({
             score,
             lang,
             level,
             description,
             alternatives
         })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

app.get('/questions/:lang/:level', async (req, res) => {
    try {
        const lang1 = req.params.lang 
        const level1=req.params.level

        
  

        const question = await Question.find({"lang":lang1,"level":level1})        
        if(!question){
            return res.status(404).json({})
        }else{
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})






//connect to mongodb

mongoose.connect(MONGO_URI,{
    useNewUrlparser:true,
    useUnifiedTopology:true
})
 .then(()=>console.log("connected to db"))
  .catch(err =>console.log(err))

const Question = require('./models/posts')
  
const port = 2001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});