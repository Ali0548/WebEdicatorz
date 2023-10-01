import React from 'react'

const ViewUser = () => {
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
                        <tr>
                            <td>Ali </td>
                            <td>Ali@gmail.com</td>
                            <td>123</td>
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
    </>
  )
}

export default ViewUser
