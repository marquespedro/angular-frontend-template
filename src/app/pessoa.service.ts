import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoas: Pessoa[] = [{
    'id': 1,
    'nome': 'Pedro',
    'sobrenome': 'Ivo'
  },
  {
    'id': 2,
    'nome': 'Nay',
    'sobrenome': 'Martins'
  }
  ];

  constructor() { }

  salvar(pessoa: Pessoa) {
    this.pessoas.push(pessoa);
  }

  listar(): Pessoa[] {
    return this.pessoas;
  }

  obterPorId(id: number): Pessoa | null {
    let encontrada = this.pessoas.filter(p => p.id == id)[0];
    if (encontrada) {
      return encontrada;
    }
    return null;
  }

  excluirPorId(id: number | undefined) {
    this.pessoas = this.pessoas.filter(p => p.id != id);
    return this.pessoas;
  }
}
