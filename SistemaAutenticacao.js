/*
Ser autenticavel significa ter o método "AUTENTICAR";
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}