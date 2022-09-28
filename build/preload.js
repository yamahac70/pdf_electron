const {contextBridge,ipcRenderer} =require("electron")

//const { stdout } = require("process")
let  usuarios=[{
    id:1,
    nombre:"mauro"
}]
const crear_usuario=(usuario)=>{
    usuarios.push(usuario)
    return usuarios
}
const ver_ip=()=>{
   
}

contextBridge.exposeInMainWorld('usuarios',{
    llamar_usuarios:()=>usuarios,
    crear_usuario:crear_usuario,
    ver_ip,
    //save_pdf:(img)=>ipcRenderer.on('SAVE_FILE',async(imge)=>{
    //    console.log(img)
    //})
    save_pdf:(imge)=>ipcRenderer.send('SAVE_FILE',imge)
    
})