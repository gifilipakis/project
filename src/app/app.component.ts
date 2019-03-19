import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "Giovanna Biagi Filipakis Souza ";
  sexo = "Feminino";
  email = "giovannafilipakis@gmail.com";
  profissao = "Estudante";
  estado_civil = "Solteira";
  cidade = "Palmas-To"
  universidade = "CEULP/ULBRA";
  curso = "Ciência da Computação";
  empresa = "Fábrica de Software";
  cargo = "Estagiária";
  interesses = ["Desenho", "Viagens", "Músicas", "Filmes"];
  minibio = "Acadêmica do 5 período de Ciência da Computação, 20 anos de idade e formada no Ensino Médio pelo colégio Olimpo em Palmas-To. Formada em Inglês pelo CNA e com experiência de estudo no exterior de um mês na CLLC, Toronto, Canadá. Já fui parte do projeto Summer Job pelo CESAR em Recife, e do programa de aceleração de Start-ups Campus Mobile, em São Paulo. Atualmente atuando como estagiária da Fábrica de Software do CEULP/ULBRA."
  disciplinas = ["LPWeb", "Cálculo II", "Redes de Computadores I",
    "Computação Gráfica", "Estrutura de Dados II", "Siatemas de Informaçõa II",
    "Sistemas Operacionais" ]
}
