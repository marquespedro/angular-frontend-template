import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng-lts/button';
import { InputTextModule } from 'primeng-lts/inputtext';

import { DetalharComponent } from './detalhar/detalhar.component';
import { ListarComponent } from './listar/listar.component';
import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';



@NgModule({
  declarations: [FormularioComponent, DetalharComponent, ListarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    FormularioRoutingModule
  ]
})
export class FormularioModule { }
