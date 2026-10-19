import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router";
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
        <Toaster />

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Auth mode="login" />}></Route>
            <Route path="/register" element={<Auth mode="register" />}></Route>

            <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
    </>
  )
}
export default App
