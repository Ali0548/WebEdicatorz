import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
function App() {

  // const name = {
  //   email:"",
  //   password:""
  //  };
  //  name.email = "Webeducatorz@gamil.com"
  //  const [user, setUser] = useState({
  //   email:"",
  //   password:""
  //  })

  let name = "Ali";

  const [user, setUser] = useState({
    email:"",
    password:""
  });

 
  const handleChange = (e)=>{
    const name=  e.target.name;
    const value = e.target.value
    setUser({user, ...{[name]:value}})
    console.log(user)
  }

  return (
    <div className="container">
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={handleChange} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
   
    {/* <label className="form-check-label" for="exampleCheck1">Check me out</label> */}
  </div>
  <button type="button" onClick={handleChange} className="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default App;
