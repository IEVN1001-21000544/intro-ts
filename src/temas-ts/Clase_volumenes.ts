import { areas } from "./Clase_areas";

class volumenes extends areas{
    protected alturaP:number;
    protected alturaPi:number;
    protected alturaCi:number;
    protected volumenP:number;
    protected volumenPi:number;
    protected volumenCi:number;
    constructor(baseR:number,alturaR:number,baseC:number,radio:number,areaR:number,areaC:number,areaCI:number,alturaP:number,alturaPi:number,alturaCi:number,volumenP:number,volumenPi:number,volumenCi:number){
        super(baseR,alturaR,baseC,radio,areaR,areaC,areaCI)
        this.alturaP=alturaP;
        this.alturaPi=alturaPi;
        this.alturaCi=alturaCi;
        this.volumenP=volumenP;
        this.volumenPi=volumenPi;
        this.volumenCi=volumenCi;
    }
    impimir(){
        this.volumenP = this.areaR * this.alturaP;
        console.log(`El volumen del prisma es: ${this.volumenP}`)
        this.volumenPi = (this.areaC * this.alturaPi) /3;
        console.log("El volumen de la piramide es: "+this.volumenPi)
        this.volumenCi = this.areaCI * this.alturaCi;
        console.log("El volumen del culindro es: "+this.volumenCi)
    }
}

const VOLUMEN=new volumenes(10,5,5,5,0,0,0,0,0,0,10,10,10);
VOLUMEN.impimir(); 