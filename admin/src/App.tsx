import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";

function AdminRedirect() {
  const logged = false;
  return <Navigate to={logged ? "/dashboard" : "/login"} replace/>
}
export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminRedirect/>}/>
        <Route path="/login" element={<Login/>}/>
        
      </Routes>
    </BrowserRouter> 
  )
}
