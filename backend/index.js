import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { User } from "./models/Login.models.js"

const app = express()
const port = 3002
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Credentials')


// app.get('/', (req, res) => {
//   res.send('App working perfectly')
// })

app.post('/Signup',(req,res)=>{
  const {name,email,password}=req.body
  User.findOne({email:email})
  .then(user=>{
    if(user){res.json('Exists')}
    else{
      res.json('DoesNotExists')
      User.create(req.body)
      .then(user=>res.json(user))
      .catch(err=>res.json(err))
    }
  })

})
app.post('/login',(req,res)=>{
  const {email,password}=req.body
  User.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json('Success')
      }else{
        res.json("Password Incorrect")
      }
    }else{
      res.json("User does not exists .. Please Signup")
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})