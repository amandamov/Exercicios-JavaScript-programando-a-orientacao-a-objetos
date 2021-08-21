class Cliente {
//a classe contem atributos ou propriedades ou campos. Similares a variáveis.
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    //método em classe similar a funçao. Recebe um parametro ou argumento, nesse caso, "valor".
    sacar(valor) {
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    } 

    depositar(valor) {
        if(valor > 0){
            this.saldo += valor;
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

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);
//contaCorrenteRicardo.depositar(-1); //método com condiçao funciona. 

console.log(contaCorrenteRicardo);
 