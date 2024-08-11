import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleonSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:3002/Signup", { name, email, password })
      .then((res) => {
        if (res.data === "Exists") {

          alert("User already exists");
        } else {
          alert("User Registerd Successfully")
          // console.log(res);
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-600 h-screen text-center">
      <div className="box bg-white  absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2  p-5  rounded-lg  ">
        <h1 className="text-gray-600 font-bold text-4xl my-3">Signup</h1>
        <form onSubmit={handleonSubmit} className="m-4" action="">
          <div className="items space-x-3 space-y-2">
            <label className="font-bold mx-3" htmlFor="">
              Name :{" "}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b-2 border-black text-black px-2 py-1  outline-none"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="items space-x-3 space-y-2">
            <label className="font-bold mx-3" htmlFor="">
              Email :{" "}
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 border-black text-black px-2 py-1  outline-none"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="items space-x-3">
            <label className="font-bold" htmlFor="">
              Password :{" "}
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 border-black text-black px-2 py-1  outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="my-2 bg-blue-400 px-2 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
        <div className="h-px w-full bg-black "></div>
        <p className="text-yellow-600 text-xl font-bold">Already have an id</p>
        <Link to={"/login"} className="my-2 bg-blue-400 px-2 rounded-lg w-full">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
