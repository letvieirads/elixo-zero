import { Routes } from '@angular/router';
import { ListaElixoComponent } from './lista-elixo/lista-elixo'; // Se no seu lista-elixo.ts a classe se chamar ListaElixo, troque aqui
import { GuiaDescarte } from './guia-descarte/guia-descarte';

export const routes: Routes = [
  // Rota principal: abre direto na lista de itens eletrônicos
  { path: '', component: ListaElixoComponent },
  // Segunda tela: guia de descarte consciente
  { path: 'guia', component: GuiaDescarte },
  // Qualquer endereço inválido redireciona para a tela principal
  { path: '**', redirectTo: '' }
];