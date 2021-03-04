import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {

  constructor() { }

  @Input() pessoa: any;

  @Output() alterarPessoa = new EventEmitter();

  ngOnInit(): void {
  }

  emitirPessoa() {
    this.alterarPessoa.emit({ nome: 'Samuel', sobrenome: 'Guedes' });
    console.log('Evento emitir pessoa', this.pessoa);
  }
}
