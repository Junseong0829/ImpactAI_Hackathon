import { Routes, Route } from 'react-router-dom';
import Header from "./home/Header";
import Body from "./home/Body";
import Login from "./pages/Login";  
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;