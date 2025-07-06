function Home() {
  return (
    <div className="card">
      <h1>¡Bienvenido a Viaja Ya!</h1>
      <p>Explorá destinos increíbles, reservá experiencias y hacé tus viajes realidad desde un solo lugar.</p>

      <h2 style={{ marginTop: '2rem' }}>Destinos populares</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginTop: '1rem'
      }}>
        <div style={{ background: '#fff', padding: '1rem', borderRadius: '10px' }}>
          <img src="src/assets/portada-paris.jpg" alt="París" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>París, Francia</h3>
          <p>La ciudad del amor te espera con sus monumentos, gastronomía y romanticismo.</p>
        </div>

        <div style={{ background: '#fff', padding: '1rem', borderRadius: '10px' }}>
          <img src="src/assets/Tokio_20210324155519.jpg" alt="Tokio" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>Tokio, Japón</h3>
          <p>Modernidad y tradición en una de las ciudades más vibrantes del mundo.</p>
        </div>

        <div style={{ background: '#fff', padding: '1rem', borderRadius: '10px' }}>
          <img src="src/assets/Patagonia.jpeg" alt="Patagonia" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>Patagonia, Argentina</h3>
          <p>Montañas, lagos y glaciares te esperan en una aventura natural única.</p>
        </div>

        <div style={{ background: '#fff', padding: '1rem', borderRadius: '10px' }}>
          <img src="src/assets/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg" alt="Nueva York" style={{ width: '100%', borderRadius: '10px' }} />
          <h3>Nueva York, Estados Unidos</h3>
          <p>La ciudad que nunca duerme con sus icónicos rascacielos y cultura vibrante.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;