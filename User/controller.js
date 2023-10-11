const { error } = require('console');
const pool = require('../db_connection');
const modelQueries = require('./queries');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const addUser = async(req,res)=>{
    try{ 
        const{ email, password } = req.body;
        //check if email exists
        const results = await modelQueries.checkEmailExists(email)
        
        if(results.rows.length==0)
        
        {
            console.log(results.rows)
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const results1 = await modelQueries.addUserQuery(email,hashedPassword)
            // console.log(results1)
            if(results1.rowCount==1)
            {
                res.status(201).send("User created successfully")
            }
        }
        else
        {
            res.send("User already exists")
        }
        
    }
    catch(error)
    {
        console.error('Error registering user:', error);
        res.status(500).send('Internal Server Error');
    }
}
const signin = async(req,res)=>{
    try{  
        const { email, password } = req.body;
        //console.log(email,password)
        if (!email || !password)
        {
            res.status(400);
            throw new Error("All fields are mandatory");
        }
        else
        {
            const emailExists = await modelQueries.checkEmailExists(email)
            console.log(emailExists.rows)    
            console.log(emailExists.rows)   
            if(emailExists.rows.length==0)
            {
                res.send("Email does not exists..")
            }
            else
            {   
                console.log("creating token")
                const hashedPassword = emailExists.rows[0].password
                console.log(emailExists.rows[0].password)
                const passwordMatch = await bcrypt.compare(password, hashedPassword);
                if(passwordMatch)
                {
                    console.log(passwordMatch)
                    const accessToken = jwt.sign({
                    user:{
                            email:emailExists.rows[0].email,
                        }
                    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"5m"});
                    res.status(200).json({accessToken});
                }
                else
                {
                     res.send("Please Enter correct password")
                }
            }
        }
    }
    catch(error)
    {
        res.send("Internal Server Error")
    }
}

module.exports={
    addUser,
    signin
}