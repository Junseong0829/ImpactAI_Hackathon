import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import logo from "./assets/Augora.png";
import "./Header.css";

function Header(){
  const {isLoggedIn, logout } = useAuth();

  return(
    <header className="custom-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img alt="augora" src={logo} width="110"/>
          </Link>
        </div>
        <div className="nav-links">
          {isLoggedIn ? (
            <Link to="/mypage" className="nav-button">My Page</Link>
          ) : (
            <>
              <Link to="/login" className="nav-button">로그인</Link>
              <Link to="/register" className="nav-button signup">회원가입</Link>
            </>
          )}
        </div>
      </div>
    </header>
    )
}

export default Header;