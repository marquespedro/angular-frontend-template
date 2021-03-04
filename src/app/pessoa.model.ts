
export class Pessoa {

    id: number | undefined;
    nome: string | undefined;
    sobrenome: string | undefined;

    constructor(nome?: string, sobrebome?: string) {
        this.nome = nome;
        this.sobrenome = sobrebome;
    }
}
