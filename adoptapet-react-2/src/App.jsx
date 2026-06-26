import { useEffect } from 'react'
import MascotaCard from './components/MascotaCard'
import { mascotas } from './data/mascotas'
import './App.css'

function App() {
  useEffect(() => {
    console.log('Mascotas cargadas:', mascotas)
  }, [])

  return (
    <main className="app">
      <h1>Adopta una mascota</h1>
      <section className="mascotas-grid">
        {mascotas.map((mascota) => (
          <MascotaCard key={mascota.id} {...mascota} />
        ))}
      </section>
    </main>
  )
}

export default App
