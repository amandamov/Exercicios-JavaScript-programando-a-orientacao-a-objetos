class Cliente {
    //a classe contem atributos ou propriedades ou campos. Similares a variáveis.
        nome;
        cpf;
    }
    
    class ContaCorrente{
        agencia;
        _saldo = 0; //se usar #, ele realmente vai ficar prvado. Porém, é uma má prática. Entao, por convençao, utilizamos apenas o _ para indicar que é um atributo privado e que nao deve ser mexido fora da class. 
    
        //método em classe similar a funçao. Recebe um parametro ou argumento, nesse caso, "valor".
        sacar(valor) {
            if(this._saldo >= valor){
                this._saldo -= valor;
            }
        } 
    
        depositar(valor) {
            if(valor > 0){
                this._saldo += valor;
                console.log(this._saldo);
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
    contaCorrenteRicardo.agencia = 1001;
    
    contaCorrenteRicardo.depositar(100);
    contaCorrenteRicardo.sacar(50);
    //contaCorrenteRicardo.depositar(-1); //método com condiçao funciona. 
    
    console.log(contaCorrenteRicardo);
     