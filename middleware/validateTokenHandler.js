const { request } = require("express");
const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async(req,res,next)=>{

    console.log("In validate")
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer") )
    {
        console.log("In if of validate")
        token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,decoded)=>{
            if(error)
            {
                res.status(401);
                throw new Error("User is not authorized")
            }
            req.user = decoded.user;
            console.log("Out validate")
            next();
        }) 
    }
    else{
        res.send("No response")
    }
})
module.exports = validateToken;