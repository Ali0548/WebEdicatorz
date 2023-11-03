import React, { useState, useEffect, useRef } from 'react'
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import LoadingBar from 'react-top-loading-bar'

const AddNotes = (props) => {
    const [progress, setProgress] = useState(0)
    console.log(props.myName)
    console.log(props.classOfmine)
    const emailValue = useRef();
    const [name, setName] = useState("ali");
    const [notes, setNotes] = useState({
        name: "", description: ""
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setNotes({ ...notes, [name]: value })
    }
    const submitMyData = async (data) => {
        try {
            setProgress(30)
            const submitData = await fetch("http://localhost:8080/inote/note/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setProgress(60)
            const result = await submitData.json();
            setProgress(100)
            if (result.status) {
                 
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
        console.log(notes)
        await submitMyData(notes)
    }
    useEffect(() => {
        setName("Ahmad");
    }, [])

    return (
        <>
           
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="card my-3">
                        <div className="card-header">
                            <h3 className="card-title">Notes Information</h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label for="">Note Name</label>
                                    <input onChange={onChange} id="name" type="text" name="name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="">Note Description</label>
                                    <input onChange={onChange} ref={emailValue} id="description" type="text" name="description" className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-success">Submit Note</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AddNotes
