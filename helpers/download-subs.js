const fs = require("fs");
const subscene = require("node-subscene-api");
const path = require("path");

const findSubs = async(filmName) => {
  try{
    //Obtener path de la pelicula
    const results = await subscene.search(filmName);

    const filmPath = results[0]?.path;

    //Obtener path del subtitulo
    const subtitles = await subscene.getSubtitles(filmPath);

    //Verificar si existe el espaniol
    const languages = Object.keys(subtitles);
    if(!languages.includes('spanish')){
      throw new Error("No hay subtitulos en idioma español");
    }
    
    //Descargar subtitulo
    const selectedSubs = subtitles.spanish[0]?.path;
    const files = await subscene.download(selectedSubs);

    const pathDownload = path.join(__dirname,'../subs',files[0]?.filename);
    fs.writeFile(pathDownload,files[0]?.file,(err) => {
      if(err){
        return console.log(err);
      }

      console.log(`El subtitulo se copio correctamente`);
    });

  }catch(err){
    console.log(err);
  }
}


module.exports = {
  findSubs
}