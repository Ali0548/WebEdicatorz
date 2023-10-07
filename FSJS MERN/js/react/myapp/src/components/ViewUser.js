import React, {useEffect, useState} from 'react'

const ViewUser = () => {
  const [userData, setUserData] = useState([])
  const fetchUsers = async ()=>{
    try {
      const submitData = await fetch("http://localhost:5000/user/get/all", {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
    });
    const users = await submitData.json();
    console.log(users)
    setUserData(users.data)
    } catch (error) {
      alert('Something Went Wrong')
    }

   
  }
  useEffect(()=>{
    fetchUsers()
  }, [])
  return (
    <>
      <div className='container'>
      <div className="card my-3">
                <div className="card-header">
                    <h3 className="card-title">Your Information</h3>
                </div>
                <table className="table">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </thead>
                    <tbody id="insertData"> 
                        {userData.map(user=>{
                          return (<tr>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.password}</td>
                          </tr>)
                        })}
                    </tbody>
                </table>
            </div>
      </div>
    </>
  )
}

export default ViewUser
