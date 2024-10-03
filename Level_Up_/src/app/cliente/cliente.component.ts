import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.component.html'
})
export class ClienteComponent {
  public mensagem: string = "";
  public obj: Cliente = new Cliente();

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
}

