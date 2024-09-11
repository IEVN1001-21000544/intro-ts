
//uso normal de funciones
//las funciones solo regresan un dato 
export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:"telefono N",
    precio:1000
}
const tablet:Producto={
    desc:"tables N",
    precio:1000
}
function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}
const articulos1=[telefono,tablet];
const iva1=calcularIVA(articulos1);
console.log(iva1)

//para que regrese mas datos se necesita hacer la desestructuracion 
//desestructuracion de funciones
export function calcularIVA2(productos:Producto[]):[number,number]{
    let total= 0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total,total*0.16]
}
const articulos2=[telefono,tablet]
const[total,iva2]=calcularIVA2(articulos2)
console.log(`Total: ${total}`)
console.log(`IVA: ${iva2}`)