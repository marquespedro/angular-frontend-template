import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioPessoa: FormGroup = this.construirFormulario();

  pessoaSalva: any = null;
  arrayPessoas : any = [] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  salvar() {
    this.pessoaSalva = this.formularioPessoa.value;
    this.arrayPessoas.push(this.pessoaSalva);
  }

  limparFormulario() {
    console.log('limpar form');
    this.formularioPessoa.reset();
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
