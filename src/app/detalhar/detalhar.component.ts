import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {

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
