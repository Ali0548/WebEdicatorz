import React, {useState} from 'react'

const Register = () => {
    const [registrationData, setRegistrationData] = useState({
        name:"", email:"", password:""
    })
    const handleChange = (e)=>{
        const {name, value} = e.target
        setRegistrationData({...registrationData, [name]:value});
        console.log(registrationData)
    }
    const registerUser = async ()=>{
       const registerUser = await fetch('http://localhost:8080/inote/auth/register', {
        method:"POST", 
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(registrationData)
       });
       const result = await registerUser.json();
       alert(result.msg)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
       await registerUser()
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
                                    <label htmlFor="">Enter Name</label>
                                    <input onChange={handleChange} name='name' type="text" className="form-control" />
                                </div>
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
                                <button type="submit" className="btn btn-success">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
