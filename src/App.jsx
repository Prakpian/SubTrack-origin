import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
