import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./Header";
import Body from "./home/Body/Body";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Article from "./pages/Article/Article";
import ChatUI from "./pages/Chat/Chat";
import LeftDetail from './pages/Article/Detail/LeftDetail';
import CenterDetail from './pages/Article/Detail/CenterDetail';
import RightDetail from './pages/Article/Detail/RightDetail';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article1" element={<Article />} />
        <Route path="/article1/leftDetail1" element={<LeftDetail />} />
        <Route path="/article1/centerDetail1" element={<CenterDetail />} />
        <Route path="/article1/rightDetail1" element={<RightDetail />} />
        <Route path="/chat" element={<ChatUI />} />
      </Routes>
    </div>
  );
}

export default App;
