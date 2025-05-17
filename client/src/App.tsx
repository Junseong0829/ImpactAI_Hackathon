<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route } from 'react-router-dom';
import "./App.css";
>>>>>>> 4c0f8c4 (도널드 트럼프의 관세 정책 구현)
import Header from "./Header";
import Body from "./home/Body/Body";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Article from "./pages/Article/Article";
import ChatUI from "./pages/Chat/Chat";

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article1" element={<Article />} />
        <Route path="/chat" element={<ChatUI />} />
      </Routes>
=======
      <div className="body">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article1" element={<Article />} />
        </Routes>
      </div>
>>>>>>> 4c0f8c4 (도널드 트럼프의 관세 정책 구현)
    </>
  );
}

export default App;
