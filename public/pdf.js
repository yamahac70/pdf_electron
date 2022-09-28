const {dialog,ipcMain}=require("electron")
const imgToPDF = require('image-to-pdf')
const fs = require('fs')
const path=require('path')

const init_imagenes=[]

const save_pdf=async(imagenes=init_imagenes)=>{
    if(imagenes.length===0){
        dialog.showErrorBox("Imagenes","no contiene images")
        return
    }
    const save =await dialog.showSaveDialog({title:"guardar archivos"});
    console.log( save)
    if(save.canceled){
        console.log("mensaje")
        return
    }
   imgToPDF(imagenes, imgToPDF.sizes.A4).pipe(fs.createWriteStream(save.filePath+'.pdf'))
    

}

module.exports={
    enviar:()=>{
        return "hola"
    },save_pdf
}