import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public mensagem: string = ""
  public obj: Cliente = new Cliente();
  public fazerLogin(){
    if(this.obj.email=='email@gmail.com' &&
      this.obj.senha=='123456'){
        localStorage.setItem("cliente", JSON.stringify(this.obj));
        window.location.href="./cliente";
      } else {
        this.mensagem = "Email ou Senha inválidos, reinicie o Mundo!!!";
        localStorage.removeItem("cliente");
      }
  }
  public novoCadastro(){
    localStorage.setItem("cliente", JSON.stringify(this.obj));
    window.location.href="./cliente";
  }
}


