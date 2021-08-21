class Cliente {
//a classe contem atributos ou propriedades ou campos. Similares a variáveis.
    nome;
    cpf;
    agencia;
    saldo;

}

const cliente1 = new Cliente(); //novo objeto. Instanciando um novo objeto. 
const cliente2 = new Cliente();

cliente1.cpf = 111222333444;
cliente1.nome = "Ricardo";
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.cpf = 333222111000;
cliente2.nome = "Alice";
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);