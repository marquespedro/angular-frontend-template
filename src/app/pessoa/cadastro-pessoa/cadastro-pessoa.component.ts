import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/pessoa.service';
import { Pessoa } from '../pessoa.model';



@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  formularioPessoa: FormGroup = this.construirFormulario();

  pessoaSalva: Pessoa | undefined | null;
  
  pessoas: Pessoa [] = [];

  constructor(private formBuilder: FormBuilder, 
              private router : Router,
              private pessoaService:PessoaService) {
  }

  ngOnInit(): void {
  }

  salvar() {
    this.pessoaService.salvar(this.construirPessoa());
    this.formularioPessoa.reset();
    this.router.navigate(['pessoa/listar']);
  }

  private construirPessoa(): Pessoa {
    return new Pessoa(this.formularioPessoa.value.nome, this.formularioPessoa.value.sobrenome);
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
