
import React from 'react'
import Pdf from '../pdf/Pdf'

function Inicio() {
  //console.log(window.usuarios.llamar_usuarios())
  //console.log(window.usuarios.crear_usuario({id:2,nombre:"perri"}))
  const crear_usuario=(e)=>{
    e.preventDefault()
    const form=Object.fromEntries(new FormData(e.target))
    const w=window.usuarios.crear_usuario(form)
    console.log(w)

  }
 
  return (
    <div>
      <form onSubmit={crear_usuario}>
        <input type="text" name="nombre" />
        <input type="submit" value="enviar" />
      </form>
        <Pdf></Pdf>
    </div>
  )
}

export default Inicio