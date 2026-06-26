import PropTypes from 'prop-types'

function MascotaCard({
  nombre,
  raza,
  edad,
  especie,
  descripcion,
  caracteristicas,
  adopcionUrgente,
}) {
  return (
    <article className="mascota-card">
      <h3>{nombre}</h3>
      <p>
        <strong>Raza:</strong> {raza}
      </p>
      <p>
        <strong>Edad:</strong> {edad} {edad === 1 ? 'año' : 'años'}
      </p>
      <p>
        <strong>Especie:</strong> {especie}
      </p>
      <p>{descripcion}</p>
      <p>
        <strong>Características:</strong>{' '}
        {caracteristicas.length > 0 ? caracteristicas.join(', ') : 'No disponible'}
      </p>
      {adopcionUrgente && <p className="urgente">Adopción urgente</p>}
    </article>
  )
}

MascotaCard.propTypes = {
  nombre: PropTypes.string,
  raza: PropTypes.string,
  edad: PropTypes.number,
  especie: PropTypes.string,
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.arrayOf(PropTypes.string),
  adopcionUrgente: PropTypes.bool,
}

MascotaCard.defaultProps = {
  nombre: 'Nombre no disponible',
  raza: 'Raza no especificada',
  edad: 0,
  especie: 'Especie desconocida',
  descripcion: 'Descripción no disponible',
  caracteristicas: [],
  adopcionUrgente: false,
}

export default MascotaCard
