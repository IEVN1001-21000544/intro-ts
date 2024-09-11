

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}


//creacion de Objeto 
const reproductor:Reproductor={
    volumen:50,
    segundo:30,
    cancion:"La vida es un sueño",
    detalles:{
        autor:"Fernando de rojas",
        year:1500
    }
}

/*console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundos son: ${reproductor.segundo}`);
console.log(`La cancion es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`El año de la cancion es: ${reproductor.detalles.year}`);*/

//Desestructurisar cen interfaces
//Con esta desestructuracion se puede ir directamente al dato que necesitamos sin necesidad de realizar tantos saltos 
//Se crea un objeto por cada interfaz que contenga los datos que necesitamos hacer
const{volumen,segundo,cancion,detalles}=reproductor;
const{autor,year}=detalles;

console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La cancion es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`El año de la cancion es: ${year}`);



//Arreglo cnormal 
const dbz:string[]=['Goku', 'majinbu', 'Frezzer', 'Babby']
console.log(`personaje 1: ${dbz[0]}`)
console.log(`personaje 2 : ${dbz[1]}`)
console.log(`personaje 3: ${dbz[2]}`)
console.log(`personaje 4: ${dbz[3]}`)
//Desestructurar en arreglos 
const[a,,b,c]=dbz;
console.log(`Personje 1: ${a}`)
console.log(`Personaje 2: ${b}`)
console.log(`Personaje 3: ${c}`)
