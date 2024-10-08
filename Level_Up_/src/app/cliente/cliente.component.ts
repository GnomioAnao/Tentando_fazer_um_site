import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';


@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  public mensagem: string = "";
  public obj: Cliente = new Cliente();
  senhaOculta=true;

  public gravar(){
    localStorage.setItem("cliente", JSON.stringify(this.obj));
    this.mensagem = "Cadastro Upado com sucesso!";
  }

  /* nesse bloco de código (o de baixo), estamos fazendo uma decisão para poder carregar o usuário já cadastrado, 
  caso ele já tenha um cadastro ele será levado para página de Login, onde podera entrar ou 
  fazer um novo cadastro */

  public carregar(){
    let json = localStorage.getItem("cliente");
    if(json == null){
      window.location.href="./login";
    } else {
      this.obj = JSON.parse(json);      
    }
  }

  constructor(){
    this.carregar();
  }

  toggleSenha() {
    this.senhaOculta = !this.senhaOculta; // Alterna a visibilidade da senha
  }

  formatarCPF() {
    // Formata o CPF
    const input = this.obj.documento.replace(/\D/g, ''); // Remove tudo que não é dígito
    if (input.length > 11) {
      this.obj.documento = input.slice(0, 11); // Limita a 11 dígitos
    }
    this.obj.documento = this.obj.documento
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após 3 dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após 3 dígitos
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona hífen antes dos últimos 2 dígitos
  }
}

