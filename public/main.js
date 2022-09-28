const {app,BrowserWindow,ipcMain} =require("electron")
//const liveServer = require("live-server");
/* liveServer.start({
    port: 4588,
    host: "0.0.0.0",
    root:"./build",
    file:"index.html"
}) */

//import {enviar} from './pdf'
const path=require("path")
//const isDev = require('electron-is-dev')
const crear_vista=()=>{
    const ventana=new BrowserWindow({
        show:false,
        width:800,
        height:600,
        webPreferences:{
            preload:path.join(__dirname,'preload.js'),
           // nodeIntegration: true,
           // contextIsolation: false,
        }
    })
    console.log(app.isPackaged)
    if(app.isPackaged){
        ventana.loadURL(`file://${path.join(__dirname, '/../build/index.html')}`)
    }else{
        ventana.loadURL('http://localhost:4000')
        ventana.webContents.openDevTools()
    }
    //ventana.loadURL('http://localhost:4588')
   // ventana.loadURL(`file://${path.join(__dirname, '/../build/index.html')}`)
    ventana.once("ready-to-show",()=>{
        //lo ponemos aqui ya que no se puede importar antes de que inicie la ventana 
        const {enviar,save_pdf} =require("./pdf")
        ventana.show();
        ventana.setPosition(0,0)
        //exportando funciones
        //ventana.webContents.send('SAVE_PDF_FUNCION',save_pdf)
       // ventana.webContents.send('SAVE_FILE',save_pdf)
       ipcMain.on('SAVE_FILE',(e,image)=>{
       // console.log(image)
        save_pdf(image)
       })
    })
    
}
app.on('ready',()=>{
    crear_vista();
    console.log("todo bien ")
})