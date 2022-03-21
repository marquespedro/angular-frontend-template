import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl:'./listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css']
})
export class ListarPessoasComponent implements OnInit {

  @Input() pessoas: Pessoa[] = [];

  constructor( private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pessoas = this.activedRoute.snapshot.queryParams as Pessoa[] ;
    
  }

}
