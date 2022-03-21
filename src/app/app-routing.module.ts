import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const rotas: Routes = [
  { path: 'pessoa', loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule) },
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
