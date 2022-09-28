import React from 'react'
import Webcam_component from '../webcam/Webcam'
import './pdf.css'
function Pdf() {
    const [fotos,setFotos]=React.useState([])
    const [wcam,setWcam] =React.useState({display:'flex',});
    const imprimir=()=>{
        setWcam({display:"none"})
        window.print();
    }
    
    const rotateImage = (imageBase64) => {
        var img = new Image();
        img.src = imageBase64;
        img.onload = () => {
          var canvas = document.createElement("canvas");
          const maxDim = Math.max(img.height, img.width);
          canvas.width = img.height;
          canvas.height = img.width;
          var ctx = canvas.getContext("2d");
          ctx.setTransform(1, 0, 0, 1, maxDim / 2, maxDim / 2);
          ctx.rotate(90 * (Math.PI / 180));
          ctx.drawImage(img, -maxDim / 2, -maxDim / 2);
          //console.log(canvas.toDataURL("image/jpeg"))
          return canvas.toDataURL("image/jpeg")
        }}


    const rotar_imagen=(imageBase64)=>{
   const p= new Promise((resolve,rejet)=>{
        
            var img = new Image();
            img.src = imageBase64;
       /*      img.width=595.28;
            img.height=841.89; */
            img.onload = () => {
              var canvas = document.createElement("canvas");
              const maxDim = Math.max(img.height, img.width);
              canvas.width = img.height;
              canvas.height = img.width;
              var ctx = canvas.getContext("2d");
              ctx.setTransform(1, 0, 0, 1, maxDim / 4, maxDim / 2);
              ctx.rotate(90 * (Math.PI / 180));
              ctx.drawImage(img, -maxDim / 2, -maxDim / 2);
              //console.log(canvas.toDataURL("image/jpeg"))
              resolve (canvas.toDataURL("image/jpeg"))
            }
        })
        return p
    }
        const pro={
            fotos,
            setFotos,
            rotar_imagen
        }
  return (
    <div>
        <Webcam_component {...pro}  style={wcam}/>
        <div className="capturas">


        {fotos.map((capt)=>{
            return (
                <img src={capt} className="captura" />
                )
            })}
        </div>

    </div>
  )
}

export default Pdf