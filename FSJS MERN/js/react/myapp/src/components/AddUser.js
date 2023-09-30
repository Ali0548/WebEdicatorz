import React from 'react'

const AddUser = () => {
  return (
    <>
       <div className="container">
        <div className="row">
            <div className="card my-3">
                <div className="card-header">
                    <h3 className="card-title">Enter Your Information</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label for="">Enter Your Name</label>
                        <input  id="name"  type="text" name="" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="">Enter Your Email</label>
                        <input id="email" type="email" name="" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="">Enter Your Password</label>
                        <input id="password" type="password" name="" className="form-control" />
                    </div>

                </div>
                <div className="card-footer">
                    <button type="button" onclick="getData()" className="btn btn-success">Submit</button>
                </div>
            </div>
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
      </div>
    </>
  )
}

export default AddUser
