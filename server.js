const express = require('express')
const userRoutes =  require('./User/routes')
const questionRoutes = require('./Question/routes')
require("dotenv").config();
const app = express();
const port = 4000;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use('/api/user',userRoutes)
app.use('/api/user/question',questionRoutes)


app.listen(port,()=>console.log(`app listening on port ${port}`));
