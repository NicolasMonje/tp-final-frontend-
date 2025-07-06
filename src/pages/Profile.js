import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:5000/user/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);

  if (!token) return <Navigate to="/login" />;

  if (!userData) return <p>Cargando...</p>;

  return (
    <div className="card">
      <h2>Perfil de {userData.username}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default Profile;
