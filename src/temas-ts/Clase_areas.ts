export class areas {
    protected baseR: number;
    protected alturaR: number;
    protected baseC:number;
    protected radio:number;
    protected areaR:number;
    protected areaC:number;
    protected areaCI:number;
    constructor(baseR:number,alturaR:number,baseC:number,radio:number,areaR:number,areaC:number,areaCI:number){
        this.baseR=baseR;
        this.alturaR=alturaR;
        this.baseC=baseC;
        this.radio=radio;
        this.areaR=areaR;
        this.areaC=areaC;
        this.areaCI=areaCI;
    }
    IMPRIMIR(){
        this.areaR = this.baseR * this.alturaR;
        console.log("El area del rectangulo es: "+this.areaR)
        this.areaC = this.baseC * this.baseC;
        console.log("El area del cuadrado es: "+this.areaC)
        this.areaCI = (Math.PI * this.radio) * Math.LOG2E;
        console.log("El area del circulo es: "+this.areaCI)
    }
}

const AREAS=new areas(10,5,5,5,0,0,0);
AREAS.IMPRIMIR()
