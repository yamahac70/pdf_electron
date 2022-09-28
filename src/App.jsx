import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log(window.usuarios.llamar_usuarios())
  console.log(window.usuarios.crear_usuario({id:2,nombre:"perri"}))
  return (
    <div className="App">

    </div>
  )
}

export default App
