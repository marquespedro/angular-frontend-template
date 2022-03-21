import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalharComponent } from './detalhar/detalhar.component';
import { FormularioComponent } from './formulario.component';
import { ListarComponent } from './listar/listar.component';


const rotas: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'detalhar/:id', component: DetalharComponent },
  { path: 'listar', component: ListarComponent },
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
