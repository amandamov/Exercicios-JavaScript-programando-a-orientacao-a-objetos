class Cliente {
//a classe contem atributos ou propriedades ou campos. Similares a variáveis.
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    //método em classe similar a funçao
    sacar(valor) {
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    } 
}


const cliente1 = new Cliente(); //novo objeto. Instanciando um novo objeto. 
cliente1.cpf = 111222333444;
cliente1.nome = "Ricardo";


const cliente2 = new Cliente()
cliente2.cpf = 333222111000;
cliente2.nome = "Alice";

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);