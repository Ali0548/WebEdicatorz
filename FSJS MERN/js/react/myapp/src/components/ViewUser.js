import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import LoadingBar from 'react-top-loading-bar'
const ViewUser = () => {
  const [userData, setUserData] = useState([])
  const [progress, setProgress] = useState(20)
  const fetchUsers = async () => {
    try {
      setProgress(50)
      const submitData = await fetch("http://localhost:5000/user/get/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      setProgress(70)
      const users = await submitData.json();
      console.log(users)
      setUserData(users.data)
      setProgress(100)
    } catch (error) {
      setProgress(100)
      alert('Something Went Wrong')
    }


  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <>
      <Navbar />
      <LoadingBar
        color='#0000FF'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className='container'>
        <div className="card my-3">
          <div className="card-header">
            <h3 className="card-title">Your Information</h3>
          </div>
          <table className="table table-response">
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </thead>
            <tbody id="insertData">
              {userData.map(user => {
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
