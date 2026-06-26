Elemento de React	¿Dónde lo usas en este problema?	¿Por qué es el adecuado?

Componente | `FiltroEspecie`, `ListaMascotas`, `MascotaCard`, `App.jsx` | Permite separar responsabilidades: cada componente tiene una función clara (filtro, lista, tarjeta, lógica principal), por lo que el proyecto es más mantenible y fácil de entender.

JSX	En todos los componentes | (`App.jsx`, `FiltroEspecie.jsx`, `ListaMascotas.jsx`, `MascotaCard.jsx`) | Permite escribir la UI de forma declarativa mezclando HTML y JavaScript en el mismo archivo, lo que hace el código más legible y directo.

Props |	`ListaMascotas` recibe `mascotas`; `FiltroEspecie` recibe `filtroSeleccionado` y `onFiltroChange` | Sirven para pasar datos y funciones del componente padre (`App`) a los hijos sin acoplar la lógica de presentación con la lógica de estado.

Estado (useState) | `App.jsx` usa `useState` para `filtroEspecie` y `busqueda` | Mantiene la información mutable que cambia con la interacción del usuario y provoca re-render para actualizar la UI.

Renderizado de listas(.map + key) | `ListaMascotas.jsx` usa `mascotas.map(mascota => <MascotaCard key={mascota.id} ... />)`	| Convierte el array de mascotas en una lista de componentes React y `key` ayuda a React a optimizar actualizaciones y evitar errores en el render.

Renderizado condicional | En `App.jsx` | se muestra el contador de urgentes solo si hay mascotas urgentes, y el mensaje "sin resultados" si no hay coincidencias	Permite mostrar u ocultar elementos según el estado de los datos, mejorando la experiencia sin renderizar todo siempre.

Además, responde brevemente (3 a 5 líneas):
1. ¿Qué ventaja tiene dividir el directorio en componentes en lugar de escribir todo en un solo archivo?
Dividir en componentes mejora la legibilidad, facilita la reutilización y el testing, y reduce el riesgo de errores al aislar responsabilidades. También permite que varios desarrolladores trabajen en partes independientes sin conflictos.

2. ¿Qué diferencia hay entre props y estado en tu solución? Da un ejemplo concreto de cada uno tomado de esta aplicación.
Props: datos inmutables desde el padre — por ejemplo `ListaMascotas` recibe la prop `mascotas` (lista filtrada) y solo la muestra. Estado: datos mutables locales — por ejemplo `App.jsx` usa `useState` para `filtroEspecie` y `busqueda`, que cambian por interacción del usuario y provocan re-renders.
