import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Body from "./home/Body/Body";
import Login from "./pages/Login/Login";  
import Register from "./pages/Register/Register";
import Article from "./pages/Article/Article";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article1" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;