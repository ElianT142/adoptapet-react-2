import ListaMascotas from './components/ListaMascotas'
import { mascotas } from './data/mascotas'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>Adopta una mascota</h1>
      <ListaMascotas mascotas={mascotas} />
    </main>
  )
}

export default App
