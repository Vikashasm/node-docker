import express from 'express'


const app= express()

app.get('/',(req,res)=>{
    res.send("your server is healthy ")
})

app.listen(3000,()=>{
    console.log('your server is listing on 3000')
})