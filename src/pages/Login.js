import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.includes('@')) return setError('Email inválido');
    if (password.length < 6) return setError('Mínimo 6 caracteres');

    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate(`/profile/${data.user.id}`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
      <button className="btn" type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
