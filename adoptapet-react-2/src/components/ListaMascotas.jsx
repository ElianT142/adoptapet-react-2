import MascotaCard from './MascotaCard'
import PropTypes from "prop-types";

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(PropTypes.object).isRequired
};
function ListaMascotas({ mascotas }) {
  return (
    <section className="mascotas-grid">
      {mascotas.map((mascota) => (
        <MascotaCard key={mascota.id} {...mascota} />
      ))}
    </section>
  )
}

export default ListaMascotas
