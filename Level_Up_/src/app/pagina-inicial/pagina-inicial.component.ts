import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';

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

    /* Os códigos são refentes as imagens, por exemplo: a imagem "carta1" tem código 1 */
    {codigo:1, nome:"Cabo Adaptador", descritivo:"Cabo Adaptador", 
      valor:30.00, quantidade:7, keywords:"Cabos, Cabo, Adaptador, Cabo Adaptador"
    },

    {codigo:2, nome:"Cadeira Gamer", descritivo:"Cadeira confortável com inclinação personalizada",  
      valor:300.00, quantidade:7, keywords:"Cadeira, Cadeiras, Gamer"
    },

    {codigo:3, nome:"Cartas Magic", descritivo:"Kit inicial com dois decks prontos para jogo", 
      valor:60.00, quantidade:4, keywords:"Carta, Cartas, Coleção, Geek, Magic, Cartas Magic"
    },

    {codigo:4, nome:"Playstation 4", descritivo:"Modelo Slim com 500GB com leitor", 
      valor:3300.00, quantidade:20, keywords:"Consoles, Console, Videogame, Playstation"
    },

    {codigo:5, nome:"Dualshock 4", descritivo:"Controle Dualshock 4 sem fio",
     valor:299.00, quantidade:30, keywords:"Controle, Controles, Videogame, Playstation"
    },

    {codigo:6, nome:"HeadSet ReDragon", descritivo:"HeadSet ReDragon RGB, Auriculares confortáveis e ajustáveis",
     valor:210.00, quantidade:10, keywords:"HeadSets, HeadSet, fone de ouvido, videogame, Videogame"
    },

    {codigo:7, nome:"God of War: Ragnarok", descritivo:"Mídia Física para ps4",
      valor:190.00, quantidade:15, keywords:"jogo, playstation, Videogame"
    },

    {codigo:8, nome:"Microfone Externo", descritivo:"Microfone Externo com entrada P2 e configurações via Bluetooth",
      valor:300.00, quantidade:5, keywords:"microfone, computador, gamer"
    },

    {codigo:9, nome:"Monitor SharkBlade", descritivo:"Monitor curvado 165hz com imersão",
      valor:1000.00, quantidade:8, keywords:"monitor,computador,gamer, Videogame"
    },

    {codigo:10, nome:"Mouse Gamer", descritivo:"Mouse Fortrek com RGB com 1000dpi",
      valor:90.00, quantidade:18, keywords:"mouse, gamer, computador, Videogame"
    },

    {codigo:11, nome:"MousePad", descritivo:"MousePad roxo, Abyss",
      valor:70.00, quantidade:8, keywords:"mouse, mousepad, Videogame"
    },

    {codigo:12, nome:"Suporte De Controles", descritivo:"Suporte para controles com temática do filme Deadpool x Wolverine para Xbox, PS4, PS5 e Switch",
      valor:50.00, quantidade:5, keywords:"Controles, suporte, Videogame"
    },

    {codigo:13, nome:"Tabuleiro WAR", descritivo:"Tabuleiro para brincar de senhor da guerra, dispute território com seus amigos, faça alianças etc.",
      valor:110.00, quantidade:10, keywords:"jogo, tabuleiro"
    },

    {codigo:14, nome:"Teclado Mecânico", descritivo:"Teclado Mecânico Gamer RGB com entrada tipoC ",
      valor:120.00, quantidade:7, keywords:"Computador, jogo, Videogame"
    }


  ];

  public verDetalhe(item:Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href ="./detalhe";
  }

  public adicionarItem(obj:Produto){
    let json = localStorage.getItem("cesta");
    let jsonCliente = localStorage.getItem("cliente");
    let cesta: Cesta = new Cesta();
    let item: Item = new Item();
    if(json==null){      //CESTA NAO EXISTE     
        item.codigo=obj.codigo;
        item.produto=obj;
        item.quantidade=1;
        item.valor= obj.valor;          
        cesta.codigo = 1;
        cesta.total = obj.valor;
        cesta.itens.push(item);          
        if(jsonCliente!=null) cesta.cliente = JSON.parse(jsonCliente);          
    } 
    else {  //CESTA EXISTE
        let achou = false;
        cesta = JSON.parse(json);
        for(let i=0; i<cesta.itens.length; i++){
          if(cesta.itens[i].codigo==obj.codigo){  //ITEM JA EXISTE
            cesta.itens[i].quantidade = cesta.itens[i].quantidade + 1;
            cesta.itens[i].valor =  cesta.itens[i].quantidade * cesta.itens[i].produto.valor;
            achou = true;
            break;
          }            
        }
        if(!achou){  //ITEM NAO EXISTE
          item.codigo=obj.codigo;
          item.produto=obj;
          item.quantidade=1;
          item.valor= obj.valor;    
          cesta.itens.push(item);      
        }
      }

      cesta.total = 0; //ATUALIZA O VALOR TOTAL DA CESTA
      for(let i=0; i<cesta.itens.length; i++){
        cesta.total= cesta.itens[i].valor + cesta.total;
      }

      localStorage.setItem("cesta", JSON.stringify(cesta));
      window.location.href = "./cesta";
  } 

}
