import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "views/home/Home";
import { Profile } from "views/profile/Profile";
import { Login } from "views/login/Login";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Chat } from "views/chat/Chat";
import { Groups } from "views/Groups/Groups";


function App() {
  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state)=> state.token));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={isAuth ? <Home /> : <Navigate to={'/'}/>}/>
          <Route path="/profile/:userId" element={<Profile />}/>
          <Route path="/messages" element={<Chat />}/>
          <Route path="/groups" element={<Groups />}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
