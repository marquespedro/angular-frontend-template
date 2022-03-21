import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioPessoa: FormGroup = this.construirFormulario();

  pessoaSalva: Pessoa | undefined | null;
  arrayPessoas: any = [] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  salvar() {
    this.pessoaSalva = new Pessoa(this.formularioPessoa.value.nome, this.formularioPessoa.value.sobrenome);
    this.pessoaSalva.id = 10;
    this.arrayPessoas.push(this.pessoaSalva);
    this.formularioPessoa.reset();
  }

  temCamposFormulario():boolean {
    return this.formularioPessoa.get('nome')?.value ||  this.formularioPessoa.get('sobrenome')?.value;
  }

  limparFormulario() {
    this.formularioPessoa.reset();
  }

  formularioInValido() : boolean{
    return !this.formularioPessoa.valid;
  }

  preencherFormulario(value: any) {
    this.formularioPessoa.patchValue(value);
  }

  construirFormulario() {
    return this.formularioPessoa = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]]
    });
  }
}
