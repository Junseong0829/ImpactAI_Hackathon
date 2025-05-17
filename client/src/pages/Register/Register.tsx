import React, {useState} from "react";
import { useAuth } from "../../context/AuthContext";
import "./Register.css";

const Register = () => {
  const {login} = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/register`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user_id: email,
          user_password: password,
          user_name: name,
        }),
      });

      if(!res.ok) throw new Error('회원가입 실패');

      const data = await res.json();
      login(data.access_token);
      alert('회원가입에 성공하였습니다.');
    } catch(err) {
      alert('회원가입 실패: 입력값을 다시 확인하세요.');
      console.error(err);
    }
  };

  return(
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>회원가입</h2>
        <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default Register;