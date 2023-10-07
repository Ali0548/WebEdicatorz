import React, { useState, useEffect, useRef } from 'react'
import Swal from 'sweetalert2';

const AddUser = (props) => {
    console.log(props.myName)
    console.log(props.classOfmine)
    const emailValue = useRef();
    const [name, setName] = useState("ali");
    const [userData, setUserData] = useState({
        name: "", email: "", password: ""
    })
    let name2 = "Mohsin";

    const changeName = () => {
        setName("Ahmad")
        name2 = "Adeel"
        alert(emailValue.current.value)
    }
    const onChange = (e) => {
        // const key = "value";
        // const myobj = {
        //     name:"Ali",
        //     value:"123"
        // }
        // myobj[key] = "Amir";
        // myobj.value = "Amir";
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }
    const submitMyData = async (data)=>{
      try {
        const submitData = await fetch("http://localhost:5000/user/add", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        const result = await submitData.json();
        if(result.status){ 
            Swal.fire({
                position: 'top-mid',
                icon: 'success',
                title: 'User is added successfully',
                showConfirmButton: false,
                timer: 1500
              })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }
        console.log(result)
      } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        alert("Something Went Wrong")
        console.log(error.message)
      }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      await submitMyData(userData)
    }
    useEffect(() => {
        setName("Ahmad");
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div style={{ color: 'red', backgroundColor: 'grey' }} className="card my-3">
                        <div className="card-header">
                            <h3 className="card-title">Enter Your Information</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label for="">Enter Your Name</label>
                                    <input onChange={onChange} id="name" type="text" name="name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="">Enter Your Email</label>
                                    <input onChange={onChange} ref={emailValue} id="email" type="email" name="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="">Enter Your Password</label>
                                    <input onChange={onChange} id="password" type="password" name="password" className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-success">Submit {name}, {name2}</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AddUser
