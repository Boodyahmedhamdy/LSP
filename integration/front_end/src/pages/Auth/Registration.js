import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import backgroundImage from "../../Assets/LibraryHall.jpg";
import "../../css/Fonts.css";
import axios  from "axios";
const localStorage =require("../../helper/Local_storage")


const Registration = () => {
  const navigate =useNavigate();
  const[signUp,setSignUp]=useState({
    email:"",
    password: "",
    name: "",
    phone: "",
    loading: false,
    err :[]
  })
const signUpFunction=(e)=>{
  e.preventDefault();  // to prevent refresh
  setSignUp({...signUp, loading:true, err: []})
  console.log(signUp);
  axios.post("http://localhost:4000/auth/signUp",{
    email : signUp.email,
    password : signUp.password,
    name : signUp.name,
    phone : signUp.phone
  }).then((res)=>{
    setSignUp({...signUp,loading:false,err: []})
    localStorage.setAuthUser(res.data)
    navigate("/");
  }).catch((error)=>{
    console.log(error);
    setSignUp({...signUp,loading:true, err: error.response.data.errors})
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
          Registration Form
        </h1>

        {signUp.err.map((error,index) => (
        <Alert key={index} variant="danger" className="p-2">
          {error.messsage}
        </Alert>
        ))}

        <Form onSubmit={signUpFunction}>
          <Form.Group className="mb-3" controlId="Name">
            <Form.Control type="text" placeholder="Full Name" 
            required 
            value={signUp.name} onChange={(e)=>setSignUp({...signUp, name: e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Name">
            <Form.Control type="text" placeholder="Phone Number" 
            required 
            value={signUp.phone} onChange={(e)=>setSignUp({...signUp, phone: e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Email">
            <Form.Control type="email" placeholder="Email" 
            required 
            value={signUp.email} onChange={(e)=>setSignUp({...signUp, email: e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-5" controlId="Password">
            <Form.Control type="password" placeholder="Password" 
            required 
            value={signUp.password} onChange={(e)=>setSignUp({...signUp, password: e.target.value})}/>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              size="lg"
              className="btn btn-dark "
            >
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
