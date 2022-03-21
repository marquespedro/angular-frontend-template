
export class Pessoa {

    id: number | undefined;
    nome: string | undefined;
    sobrenome: string | undefined;

    constructor(nome?: string, sobrebome?: string) {
        this.id = Math.random();
        this.nome = nome;
        this.sobrenome = sobrebome;
    }   
}
