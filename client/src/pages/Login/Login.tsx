import React, {useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import "./Login.css";

const Login = () => {
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user_id: email,
          user_password: password,
        }),
      });

      if(!res.ok) throw new Error('로그인 실패');

      const data = await res.json();
      login(data.access_token);
      window.location.href = "/";
    }catch(err){
      alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
      console.error(err);
    }
  };

  return(
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>로그인</h2>
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;