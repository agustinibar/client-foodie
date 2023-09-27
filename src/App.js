import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Home } from "views/home/Home";
import { Profile } from "views/profile/Profile";
import { Login } from "views/login/Login";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/profile/:userId" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
