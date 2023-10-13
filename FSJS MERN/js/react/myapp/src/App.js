import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewUser from './components/ViewUser';
import AddUser from './components/AddUser';
import User from './components/User';
import Welcome from './components/Welcome';

function App() {
  return (
    <>


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} /> 
            <Route path="/addUser/*" element={<AddUser />} /> 
            <Route path="/viewUser" element={<ViewUser />} /> 
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
