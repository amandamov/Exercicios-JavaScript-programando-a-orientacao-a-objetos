import {Contas} from "./Contas.js";

export class ContaCorrente extends Contas {
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
        }
    
}
