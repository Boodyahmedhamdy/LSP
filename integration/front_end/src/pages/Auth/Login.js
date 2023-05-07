import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import backgroundImage from "../../Assets/LibraryHall.jpg";
import "../../css/Login.css";
import "../../css/Fonts.css";
import axios  from "axios";
const localStorage =require("../../helper/Local_storage")



const Login = () => {
  const navigate =useNavigate();
  const[login,setLogin]=useState({
    email:"",
    password: "",
    loading: false,
    err :[]
  })
const loginFunction=(e)=>{
  e.preventDefault();  // to prevent refresh
  setLogin({...login,loading:true,err: []})
  console.log(login);
  axios.post("http://localhost:4000/auth/login",{
    email : login.email,
    password : login.password
  }).then((res)=>{
    setLogin({...login,loading:false,err: []})
    localStorage.setAuthUser(res.data)
    navigate("/");
  }).catch((error)=>{
    console.log(error);
    setLogin({...login,loading:true, err: error.response.data.errors})
  })
}

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="login-container p-5">
        <h1
          className="mb-5 text-center text-white"
          style={{ fontFamily: "Pacifico, cursive" }}
        >
          Login Form
        </h1>

        {login.err.map((error,index) => (
        <Alert key={index} variant="danger" className="p-2">
          {error.messsage}
        </Alert>
        ))}

        <Form onSubmit={loginFunction}>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Control type="email" placeholder="Email"
            required 
            value={login.email} onChange={(e)=>setLogin({...login, email: e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-5" controlId="Password">
            <Form.Control type="password" placeholder="Password"
            required
            value={login.password} onChange={(e)=>setLogin({...login, password: e.target.value})} />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="btn btn-dark "
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
