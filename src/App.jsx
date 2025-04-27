import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";

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
