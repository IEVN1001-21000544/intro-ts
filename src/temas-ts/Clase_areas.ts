export class areas {
    protected baseR: number;
    protected alturaR: number;
    protected baseC:number;
    protected radio:number;
    constructor(baseR:number,alturaR:number,baseC:number,radio:number){
        this.baseR=baseR;
        this.alturaR=alturaR;
        this.baseC=baseC;
        this.radio=radio;
    }
    calcularAreaRectangulo(){
        return this.baseR * this.alturaR;
    }
    calcularAreaCuadrado(){
        return this.baseC * this.baseC;
    }
    calcularAreaCirculo(){
        return Math.PI * Math.pow(this.radio, 2);
    }
}

