import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AddUser from './components/AddUser';
import ViewUser from './components/ViewUser';
import AddNotes from './components/AddNotes';
const Logout = ()=>{
  localStorage.clear();
  window.location.href = "/"
  return (
    <></>
  )
}
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Login/>} /> 
            <Route path="/addUser" element={<AddUser />} /> 
            <Route path="/addNote" element={<AddNotes />} /> 
            <Route path="/viewUser" element={<ViewUser />} /> 
            <Route path="/logout" element={<Logout />} /> 
          </Routes>
        </BrowserRouter>
     {/* <Register/> */}
    
    </div>
  );
}

export default App;
