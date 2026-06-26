import PropTypes from 'prop-types'
import './FiltroEspecie.css'

function FiltroEspecie({ filtroSeleccionado, onFiltroChange }) {
  const opciones = ['Todas', 'Perro', 'Gato', 'Otro']

  return (
    <div className="filtro-especie">
      <h2>Filtrar por especie:</h2>
      <div className="botones-filtro">
        {opciones.map((opcion) => (
          <button
            key={opcion}
            className={`btn-filtro ${filtroSeleccionado === opcion ? 'activo' : ''}`}
            onClick={() => onFiltroChange(opcion)}
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  )
}

FiltroEspecie.propTypes = {
  filtroSeleccionado: PropTypes.string.isRequired,
  onFiltroChange: PropTypes.func.isRequired
}

export default FiltroEspecie

