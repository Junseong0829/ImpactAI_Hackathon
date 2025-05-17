import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`이름: ${name}\n이메일: ${email}\n비밀번호: ${password}`);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>회원가입</h2>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default Register;
