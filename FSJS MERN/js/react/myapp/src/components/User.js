import React from 'react';
import AddUser from './AddUser';
import ViewUser from './ViewUser';


 const User = () => {
    const name = "Ali";
    const myClass = "BSIT";
  return (
    <>
     <AddUser myName={name} classOfmine={myClass}/>
     <ViewUser myName={name} />
    </>
  )
}
export default User
