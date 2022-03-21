import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';



@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  formularioPessoa: FormGroup = this.construirFormulario();

  pessoaSalva: Pessoa | undefined | null;
  
  arrayPessoas: any = [] = [];

  constructor(private formBuilder: FormBuilder, private router : Router) {
  }

  ngOnInit(): void {
  }

  salvar() {
    this.pessoaSalva = new Pessoa(this.formularioPessoa.value.nome, this.formularioPessoa.value.sobrenome);
    this.pessoaSalva.id = 10;
    this.arrayPessoas.push(this.pessoaSalva);
    this.formularioPessoa.reset();
    this.router.navigate(['formulario/listar']);
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
