import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [{ path: 'formulario', component: FormularioComponent }];
@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
