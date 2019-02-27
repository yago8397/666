import { Cerveja } from "./cerveja";
import { Loja } from "./loja";

export class Promo{
    preco: string;
    titulo: string;
    dataCad: string;
    dataExp: string;
    cerveja : Cerveja;
    loja : Loja;

    constructor(objFirebase : any){
        this.preco = objFirebase.preco
        this.dataCad = objFirebase.dataCad
        this.dataExp = objFirebase.dataExp
        this.cerveja = objFirebase.cerveja
        this.loja = objFirebase.loja
    }
}