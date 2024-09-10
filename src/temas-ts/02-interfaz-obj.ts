
//Definir clase
interface Alumno{
    nombre:string,
    apellido:string,
    edad:number,
    genero:string
    calificacion?:number;
}
//para hacer que el parametro se vuelva opcional se coloca el ? despues de la variable y antes del =
//delante del nombre alumno, se coloca el nombre de la interfaz Alumno 
//que es donde se cumplen los parametros 
const alumno:Alumno={
    nombre:"Mario",
    apellido: "Lopez",
    edad: 23,
    genero:"M",
}
console.table(alumno)

let mascotas = ['perico','perro','gato'];
console.log(mascotas[1])//se muestra la casilla seleccionada o la posicion del arreglo
mascotas[1]='nuevo perro'; //se remplaza en la posicion del arreglo
console.log(mascotas[1]);//se muetra la posicion modificada
mascotas.push('Hamster'); //Agregas un elemento mas al arreglo
console.log(mascotas); //se muestran todos los arreglos

let tem:(string|number)[]=[];

tem.push(11);
tem.push('Mario')

console.log(tem)
