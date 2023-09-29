import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "views/home/Home";
import { Profile } from "views/profile/Profile";
import { Login } from "views/login/Login";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile/:userId" element={<Profile />}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
