import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const rotas: Routes = [
  { path: 'formulario', loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule) },
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
