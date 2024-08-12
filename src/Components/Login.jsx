import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState("")
    const navigate=useNavigate()

    const handleonSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:3002/login',{email,password})
        .then(res=>{
          if(res.data=='Success'){
            alert("Loggedin Successfully")
            navigate('/Home')
          }else{
            setStatus("Incorrect Password")
            // alert("Incorrect password")
          }
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className="bg-gray-600 h-screen text-center">
      <div className="box bg-white  absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2  p-5  rounded-lg  ">
      <h1 className="text-gray-600 font-bold text-4xl my-3">Login</h1>
        <form onSubmit={handleonSubmit} className="m-4" action="">
          <div className="items space-x-3 space-y-2">
            <label className="font-bold " htmlFor="">Email : </label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border-b-2 border-black text-black px-2 py-1  outline-none" type="email" placeholder="email" />
          </div>
          <div className="items space-x-3">
            <label className="font-bold" htmlFor="">Password : </label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className="border-b-2 border-black text-black px-2 py-1  outline-none" type="password" placeholder="Password" />
          </div>
          <button type="submit" className="my-2 bg-blue-400 px-2 rounded-lg w-full">Submit</button>
        </form>
        <p className="text-red-500 font-semibold">{status}</p>
        <div className="h-px w-full bg-black "></div>
        <p className="text-yellow-600 text-xl font-bold">Register Now</p>
        <Link to={'/Signup'} className="my-2 bg-blue-400 px-2 rounded-lg w-full">Register</Link>
      </div>
    </div>
  );
};

export default Login;
