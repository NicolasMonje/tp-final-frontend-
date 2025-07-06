import React, { useState } from 'react';
import { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser({ email, password, name });
    if (response.message === 'Usuario registrado correctamente.') {
      setSuccess('Registro exitoso. Ahora podés iniciar sesión.');
      setError('');
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setError(response.message || 'Error en el registro');
      setSuccess('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;