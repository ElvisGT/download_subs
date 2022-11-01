const { getFilmWithoutSubs,findSubs } = require("./helpers");


const main = () => {
 const folders =  getFilmWithoutSubs('Peliculas');

 //Buscar subs por cada carpeta encontrada
 if(folders.length > 0){
   folders.forEach( folder => {
    findSubs(folder);
   })
 }

}


main();