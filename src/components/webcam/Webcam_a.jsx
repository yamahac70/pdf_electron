import React from 'react'

function Webcam_component({setFotos,fotos}) {
    const [video,setVideo] =React.useState([]);
    const tamanio=()=>{

    }
    const constraints = {
        audio: false,
        video: {
          width: 1123, height: 794
        }
      };
      
      // Access webcam
      async function init() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          handleSuccess(stream);
        } catch (e) {
         console.log(`navigator.getUserMedia error:${e.toString()}`);
        }
      }
      
      // Success
      function handleSuccess(stream) {
        window.stream = stream;
        setVideo(stream);
        document.getElementById('video').srcObject = stream
      }

      React.useEffect(() => {
        init();
        console.log(video)
      },[])

  return (
    <div>
        <div className="video-wrap">
    <video id="video" controls={true} style={{width: 1123, height: 794}}/>
</div>


<div className="controller">
    <button id="snap">Capture</button>
</div>

    </div>
  )
}

export default Webcam_component;