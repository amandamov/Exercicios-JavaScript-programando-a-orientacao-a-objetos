//Classe Abstrata
export class Contas {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Contas){
            throw new Error("Voce nao deveria instanciar um objeto do tipo Conta pois essa é uma classe abstrata.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //Método abstrato
    sacar(valor) {
        throw new Error("O método Sacar da classe Contas é abstrato e precisa ser sobrescrito.");
    } 

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if(valor <= 100){
            return;
        } 
        this._saldo += valor;
    }

    transferir(valor,conta){

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}