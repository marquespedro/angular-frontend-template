import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng-lts/api';
import { PessoaService } from 'src/app/pessoa.service';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css']
})
export class ListarPessoasComponent implements OnInit {

  @Input() pessoas: Pessoa[] = [];
  @ViewChild('tabela' , {static:false}) tabelaPessoas: any;
  
  constructor(private activedRoute: ActivatedRoute, 
              private pessoaService: PessoaService,
              private confirmation: ConfirmationService,) { }

  ngOnInit(): void {
    this.pessoas = this.pessoaService.listar();
  }

  confirmarExclusao(pessoa: Pessoa){
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir pessoa?',
      accept: () => {
        this.pessoas = this.pessoaService.excluirPorId(pessoa.id);
      }
    });
  }

  podeExcluir(id:number){
    return [1,2].filter(v => v == id).length == 0;
  }

}
