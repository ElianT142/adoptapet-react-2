import { useState } from 'react'
import ListaMascotas from './components/ListaMascotas'
import FiltroEspecie from './components/FiltroEspecie'
import { mascotas } from './data/mascotas'
import './App.css'

const MAX_BUSQUEDA_LENGTH = 50

// Normaliza y valida el texto de búsqueda
function normalizarBusqueda(texto) {
  return texto
    .trim()
    .slice(0, MAX_BUSQUEDA_LENGTH)
}

function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  // Handler para actualizar búsqueda con validación
  const handleBusquedaChange = (e) => {
    const textoNormalizado = normalizarBusqueda(e.target.value)
    setBusqueda(textoNormalizado)
  }

  // Aplicar filtros al array de mascotas
  const mascotasFiltradas = mascotas.filter((mascota) => {
    const cumpleFiltroEspecie = filtroEspecie === 'Todas' || mascota.especie === filtroEspecie
    const cumpleBusqueda = mascota.nombre.toLowerCase().includes(busqueda.toLowerCase())
    return cumpleFiltroEspecie && cumpleBusqueda
  })

  // Contar mascotas con adopción urgente (sin filtros)
  const mascotasUrgentes = mascotas.filter((mascota) => mascota.adopcionUrgente).length

  return (
    <main className="app">
      <h1>Adopta una mascota</h1>
      
      <div className="header-info">
        {mascotasUrgentes > 0 && (
          <div className="contador-urgentes">
            <span className="icono">⚠️</span>
            <span className="texto">
              {mascotasUrgentes} {mascotasUrgentes === 1 ? 'mascota necesita' : 'mascotas necesitan'} adopción urgente
            </span>
          </div>
        )}
      </div>

      <FiltroEspecie 
        filtroSeleccionado={filtroEspecie} 
        onFiltroChange={setFiltroEspecie} 
      />

      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={handleBusquedaChange}
          maxLength={MAX_BUSQUEDA_LENGTH}
          className="input-busqueda"
        />
        {busqueda.length > 0 && (
          <span className="contador-busqueda">
            {busqueda.length}/{MAX_BUSQUEDA_LENGTH}
          </span>
        )}
      </div>

      {mascotasFiltradas.length === 0 ? (
        <div className="sin-resultados">
          <p>No hay mascotas que coincidan con los filtros seleccionados</p>
        </div>
      ) : (
        <ListaMascotas mascotas={mascotasFiltradas} />
      )}
    </main>
  )
}

export default App
