import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent {
  public mensagem: string = "Conheça nossos produtos que poderam dar um Level-Up na sua jogatina!";
  public lista:  Produto[] = [
    {codigo:1, nome:"Cabo Adaptador", descritivo:"Cabo Adaptador", 
      valor:30.00, quantidade:7, keywords:"Cabos, Cabo, Adaptador, Cabo Adaptador"
    },

    {codigo:11, nome:"Cabo de Força", descritivo:"Cabo de Força, Energia para Pc, monitor, entre outros", 
      valor:30.00, quantidade:7, keywords:"Cabos, Cabo, Monitor, Cabo de força"
    },

    {codigo:2, nome:"Cadeira Gamer Tritom", descritivo:"Cadeira confortável com inclinação personalizada", 
      valor:600.00, quantidade:4, keywords:"Cadeira, Cadeiras, Gamer"
    },
    {codigo:3, nome:"Cadeira Gamer Ninja", descritivo:"Cadeira ajustável, com encosto estufado e cores personalizaveis", 
      valor:530.00, quantidade:7, keywords:"Cadeira, Cadeiras, Gamer"
    },

    {codigo:4, nome:"Cartas Magic", descritivo:"Kit Inicial com dois decks prontos para jogo",
     valor:70.00, quantidade:10, keywords:"Carta, Cartas, Coleção, Geek, Magic, Cartas Magic"
    },

    {codigo:5, nome:"UNO", descritivo:"Premium Cards, UNO black",
     valor:60.00, quantidade:10, keywords:"Carta, Cartas, UNO"
    },

    {codigo:6, nome:"XBox", descritivo:"Xbox Serie-x 1 TERA- Mídia física, Controle Elite Wireless Series 2",
      valor:4100.00, quantidade:5, keywords:"Consoles, Console, Videogame, Xbox"
    },

    {codigo:7, nome:"Playstation", descritivo:"Playstation 5 sem leitor - Mídia digital, Controle DualSense sem fio",
      valor:4500.00, quantidade:5, keywords:"Consoles, Console, Videogame, Playstation"
    },

    {codigo:8, nome:"DualShock 4", descritivo:"Controle Ps4 DualShock 4 sem fio",
      valor:210.00, quantidade:5, keywords:"Controle, Controles, Videogame, Playstation"
    },

    {codigo:9, nome:"Controle sem fio", descritivo:"Controle Tomate sem fio",
      valor:100.00, quantidade:5, keywords:"Controle, Controles, Videogame, Playstation"
    },

    {codigo:10, nome:"HeadSet Gamer", descritivo:"Fone de ouvido RGB Gamer, para PCs e Consoles",
      valor:160.00, quantidade:5, keywords:"HeadSets, Fone de Ouvido, Videogame"
    },

    {codigo:12, nome:"HeadSet ReDragon", descritivo:"HeadSet ReDragon RGB, Auriculares confortáveis e ajustáveis",
      valor:220.00, quantidade:5, keywords:"HeadSets, Fone de Ouvido, Videogame"
    },

  ];

  public verDetalhe(item:Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href ="./detalhe";
  }
}
