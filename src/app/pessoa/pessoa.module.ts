import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng-lts/button';
import { InputTextModule } from 'primeng-lts/inputtext';


import { FormularioRoutingModule } from './pessoa-routing.module';

import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { DetalharPessoaComponent } from './detalhar-pessoa/detalhar-pessoa.component';
import { ListarPessoasComponent } from './listagem-pessoas/listar-pessoas.component';


@NgModule({
  declarations: [CadastroPessoaComponent, DetalharPessoaComponent, ListarPessoasComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    FormularioRoutingModule
  ]
})
export class PessoaModule { }
