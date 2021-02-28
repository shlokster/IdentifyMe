const { request, response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const userRouters = require('./routes/user')
require("dotenv").config();
const app = express()
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true
}).then(()=> console.log("DB Connected"));
app.use("/api",userRouters);
const port = process.env.PORT || 8000
app.listen(port,()=>{
console.log('server running ${port}');
});