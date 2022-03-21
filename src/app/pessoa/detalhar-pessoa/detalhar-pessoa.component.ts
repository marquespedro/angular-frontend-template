import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa.model';


@Component({
  selector: 'app-detalhar-pessoa',
  templateUrl: './detalhar-pessoa.component.html',
  styleUrls: ['./detalhar-pessoa.component.css']
})
export class DetalharPessoaComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute) { }

  @Input() pessoa: Pessoa | null | undefined;

  @Output() alterarPessoa = new EventEmitter();

  ngOnInit(): void {
   
    let id = this.activedRoute.snapshot.params['id'];
   
    console.log('Parametro id na rota : ', id);
   
    if (id) {
      this.pessoa = new Pessoa('Teste', 'Aleatorio');
    }
  }

  emitirPessoa() {
    this.alterarPessoa.emit({ nome: 'Samuel', sobrenome: 'Guedes' });
  }
}
