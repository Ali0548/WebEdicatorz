import React, {useState} from 'react'

const Login = () => {
    const [loginData, setloginData] = useState({
     email:"", password:""
    })
    const handleChange = (e)=>{
        const {name, value} = e.target
        setloginData({...loginData, [name]:value});
        console.log(loginData)
    }
    const loginUser = async ()=>{
       const loginUser = await fetch('http://localhost:8080/inote/auth/login', {
        method:"POST", 
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(loginData)
       });
       const result = await loginUser.json();
      if(result.status){
        console.log(result)
        localStorage.setItem("authTokken",result.data);
        window.location.href = "/addUser"
      } else {
        alert("Invalid Credentials")
      }
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
       await loginUser()
    }
    return (
        <>
            <div className="container">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Please enter details to login
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Enter Email</label>
                                    <input onChange={handleChange} name='email' type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Enter Password</label>
                                    <input onChange={handleChange} name='password' type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
