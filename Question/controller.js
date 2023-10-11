const { error } = require('console');
const pool = require('../db_connection');
const modelQueries = require('./queries');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const addQuestion = async(req,res)=>{
    try
    {
        const { questionText } =  req.body
        const userEmail = req.user.email
        //console.log(req.user.email)
        const insertQuestion = await modelQueries.addQuestionQuery(questionText,userEmail)
        //console.log(insertQuestion)
        if(insertQuestion.rowCount==1)
        {
            res.send("Question added sucessfully")          
        }
        else
        {
            res.send("Some Error Occured")
        }

    }
    catch(error)
    {
        res.send("In error")
    }

}

const deleteQuestion = async(req,res)=>{
    console.log("In delete")
    try
    {
        const { question_id } = req.body
        const userEmail = req.user.email
        console.log(question_id)
        deletedQuestion = await modelQueries.deleteQuestionQuery(question_id,userEmail)
        console.log(deletedQuestion)
        if(deletedQuestion.rowCount==1)
        {
            res.send("question deleted successfully")
        }
        else
        {
            res.send("Some error occured")
        }
    }
    catch(error)
    {
        res.send(error)
    }
}

module.exports = {
    addQuestion,
    deleteQuestion,
}