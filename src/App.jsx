import { Routes, Route } from "react-router-dom";
import { DashBoard } from "./components/dashboard";
import { Login } from "./components/login";
import { NotFound } from "./components/notFound";
import { Register } from "./components/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="Dashboard/:name" element={<DashBoard />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
