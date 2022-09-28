import React from 'react'
import Webcam from 'react-webcam'

const Precion=({capturar,guardar})=>{
 window.addEventListener('keydown',async(e)=>{
  const tecla=e.key
  if(tecla==="c"){
    console.log("captura")
    await capturar()
    return null
  }else if(tecla==="s"){
    console.log("guardar")
    await guardar()
    return null
  }
 })
}



function Webcam_component({setFotos,fotos,rotar_imagen}) {
   const ref=React.useRef(null)
   const tamanios={
    width: 1123, height: 794
   }
    const captura=async()=>{
        const cap=ref.current.getScreenshot({orientation:""})
        setFotos([...fotos,await rotar_imagen(cap)])
        return null
    }
    const enviar=async()=>{
   
      window.usuarios.save_pdf(fotos)
      return null
    }
    
  return (
    <div  className="wcam">
        <Webcam audio={false}  ref={ref} screenshotFormat="image/jpeg" {...tamanios}  />
        <button onClick={captura} style={{}}>Captura</button>
        <button onClick={enviar}>Enviar</button>
        <Precion capturar={captura} guardar={enviar}/>
    </div>
  )
}

export default Webcam_component;