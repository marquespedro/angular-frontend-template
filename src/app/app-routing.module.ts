import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DetalharComponent } from './detalhar/detalhar.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'detalhar/:id', component: DetalharComponent },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' }
];
@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
