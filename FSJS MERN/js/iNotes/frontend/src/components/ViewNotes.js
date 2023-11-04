import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import LoadingBar from 'react-top-loading-bar'
const ViewNotes = () => {
  const [notesData, setNotesData] = useState([])
  const [progress, setProgress] = useState(20)
  const fetchNotes = async () => {
    try {
      setProgress(50)
      const submitData = await fetch("http://localhost:8080/inote/note/getAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      setProgress(70)
      const users = await submitData.json();
      console.log(users)
      setNotesData(users.data)
      setProgress(100)
    } catch (error) {
      setProgress(100)
      alert('Something Went Wrong')
    }


  }
  useEffect(() => {
    fetchNotes()
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
              <th>name</th>
              <th>Description</th>
            </thead>
            <tbody id="insertData">
              {notesData.map(user => {
                return (<tr>
                  <td>{user.name}</td>
                  <td>{user.description}</td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewNotes
