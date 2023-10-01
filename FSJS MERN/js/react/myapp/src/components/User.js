import React from 'react';
import AddUser from './AddUser';
import ViewUser from './ViewUser';


 const User = () => {
    const name = "Ali";
  return (
    <>
     <AddUser myName={name}/>
     <ViewUser myName={name}/>
    </>
  )
}
export default User
