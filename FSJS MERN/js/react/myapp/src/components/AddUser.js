import React, {useState, useEffect, useRef} from 'react'

const AddUser = (props) => {
    const emailValue = useRef();
   const [name, setName] = useState("ali");
   let name2 = "Mohsin";
   
   const changeName = ()=>{
    setName("Ahmad")
    name2 = "Adeel"
    alert(emailValue.current.value)
   }
   useEffect(()=>{
    setName("Ahmad");
   }, [])
 
  return (
    <>
       <div className="container">
        <div className="row">
            <div style={{color:'red',backgroundColor:'grey'}} className="card my-3">
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
                        <input ref={emailValue} id="email" type="email" name="" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="">Enter Your Password</label>
                        <input id="password" type="password" name="" className="form-control" />
                    </div>

                </div>
                <div className="card-footer">
                    <button type="button" onClick={changeName} className="btn btn-success">Submit {name}, {name2}</button>
                </div>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default AddUser
