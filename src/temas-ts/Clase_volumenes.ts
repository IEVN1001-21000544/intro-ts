import { areas } from "./Clase_areas";

class volumenes extends areas{
    protected alturaP:number;
    protected alturaPi:number;
    protected alturaCi:number;
    constructor(baseR:number,alturaR:number,baseC:number,radio:number,alturaP:number,alturaPi:number,alturaCi:number){
        super(baseR,alturaR,baseC,radio);
        this.alturaP=alturaP;
        this.alturaPi=alturaPi;
        this.alturaCi=alturaCi;
    }
    calcularVolumenPrisma(){
        const areaR = this.calcularAreaRectangulo();
        return areaR * this.alturaP;
    }
    calcularVolumenPiramide(){
        const areaC = this.calcularAreaCuadrado();
        return (areaC * this.alturaPi) / 3;
    }
    calcularVolumenCilindro(){
        const areaCi = this.calcularAreaCirculo();
        return areaCi * this.alturaCi;
    }
    imprimirVolumenes(){
        console.log(`El volumen del prisma es: ${this.calcularVolumenPrisma()}`);
        console.log(`El volumen de la piramide es: ${this.calcularVolumenPiramide()}`);
        console.log(`El volumen del cilindro es: ${this.calcularVolumenCilindro()}`);
    }
}

const VOLUMEN = new volumenes(10,5,5,5,10,10,10);
VOLUMEN.imprimirVolumenes();