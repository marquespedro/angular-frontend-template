import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from 'src/app/pessoa.service';
import { Pessoa } from '../pessoa.model';


@Component({
  selector: 'app-detalhar-pessoa',
  templateUrl: './detalhar-pessoa.component.html',
  styleUrls: ['./detalhar-pessoa.component.css']
})
export class DetalharPessoaComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute, 
              private pessoaService: PessoaService) { }

  @Input() pessoa: Pessoa | null | undefined;

  @Output() alterarPessoa = new EventEmitter();

  ngOnInit(): void {

    let id = this.activedRoute.snapshot.params['id'];

    if (id) {
      this.pessoa = this.pessoaService.obterPorId(id);
    }
  }

  emitirPessoa() {
    this.alterarPessoa.emit(this.pessoa);
    window.alert(`Isto é um evento: ${this.pessoa?.nome} `);
  }
}
