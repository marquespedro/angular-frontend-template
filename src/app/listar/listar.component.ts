import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input() pessoas: Pessoa[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
