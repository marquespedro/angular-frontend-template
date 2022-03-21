import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { DetalharPessoaComponent } from './detalhar-pessoa/detalhar-pessoa.component';
import { ListarPessoasComponent } from './listagem-pessoas/listar-pessoas.component';


const rotas: Routes = [
  { path: '', component: CadastroPessoaComponent },
  { path: 'detalhar/:id', component: DetalharPessoaComponent },
  { path: 'listar', component: ListarPessoasComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(rotas)
  ],
  exports: [
    RouterModule
  ]
})

export class FormularioRoutingModule { }
