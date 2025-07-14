import React, { useEffect, useState } from 'react';
import { getViajes, crearViaje, actualizarViaje, eliminarViaje } from '../services/ViajesService';

const Viajes = () => {
  const [viajes, setViajes] = useState([]);
  const [nuevoViaje, setNuevoViaje] = useState({ destino: '', fecha: '', precio: 0 });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [viajeEditando, setViajeEditando] = useState(null);

  useEffect(() => {
    cargarViajes();
  }, []);

  const cargarViajes = async () => {
    const res = await getViajes();
    setViajes(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modoEdicion) {
      await actualizarViaje(viajeEditando, nuevoViaje);
      setModoEdicion(false);
      setViajeEditando(null);
    } else {
      await crearViaje(nuevoViaje);
    }
    setNuevoViaje({ destino: '', fecha: '', precio: 0 });
    cargarViajes();
  };

  const editar = (viaje) => {
    setModoEdicion(true);
    setViajeEditando(viaje._id);
    setNuevoViaje({ destino: viaje.destino, fecha: viaje.fecha.split('T')[0], precio: viaje.precio });
  };

  const borrar = async (id) => {
    await eliminarViaje(id);
    cargarViajes();
  };

  return (
    <div>
      <h2>{modoEdicion ? 'Editar Viaje' : 'Nuevo Viaje'}</h2>
      <form onSubmit={handleSubmit}>
        <input value={nuevoViaje.destino} onChange={(e) => setNuevoViaje({ ...nuevoViaje, destino: e.target.value })} placeholder="Destino" required />
        <input type="date" value={nuevoViaje.fecha} onChange={(e) => setNuevoViaje({ ...nuevoViaje, fecha: e.target.value })} required />
        <input type="number" value={nuevoViaje.precio} onChange={(e) => setNuevoViaje({ ...nuevoViaje, precio: e.target.value })} placeholder="Precio" required />
        <button type="submit">{modoEdicion ? 'Actualizar' : 'Crear'}</button>
      </form>

      <h2>Lista de Viajes</h2>
      <ul>
        {viajes.map((v) => (
          <li key={v._id}>
            {v.destino} - {new Date(v.fecha).toLocaleDateString()} - ${v.precio}
            <button onClick={() => editar(v)}>Editar</button>
            <button onClick={() => borrar(v._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Viajes;