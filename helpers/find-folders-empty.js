const fs = require("fs");
const path = require("path");

const getFilmWithoutSubs = (folderName) => {

  const homePath = path.join(__dirname, '../../',folderName);
  const existsSubs = [];
  let notFound = [];

  try{
    const folders = fs.readdirSync(homePath);

    //Buscar dentro de las carpetas
    folders.forEach((folder) => {
      const filesPath = path.join(homePath,'/',folder);
      
      const files = fs.readdirSync(filesPath);


      //Obteniendo la extension
      files.forEach( file => {
        const [fileName,ext] = file.split(".");

        if(ext === 'srt'){
          existsSubs.push(folder); 
        }
      })

      if(!existsSubs.includes(folder)){
        notFound.push(folder);
      }

    
    })

    
  }catch(err){
    console.log(err);
  }

  return notFound;

}


getFilmWithoutSubs('Peliculas')

module.exports = {
  getFilmWithoutSubs
}