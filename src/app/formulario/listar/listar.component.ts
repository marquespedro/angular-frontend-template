import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input() pessoas: Pessoa[] = [];

  constructor( private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pessoas = this.activedRoute.snapshot.queryParams as Pessoa[] ;
    
  }

}
