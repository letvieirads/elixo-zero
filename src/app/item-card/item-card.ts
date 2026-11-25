import { Component, input, output } from '@angular/core';
import { ItemEletronico } from '../item-eletronico.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.html', // Se o seu arquivo se chamar item-card.component.html, mantenha o nome original!
  styleUrl: './item-card.css'      // Se o seu arquivo se chamar item-card.component.css, mantenha o nome original!
})
export class ItemCardComponent {
  // Recebe os dados de um item eletrônico enviados pelo componente pai (tela principal)
  item = input.required<ItemEletronico>();

  // Eventos de saída (output) para avisar o componente pai quando o usuário clicar nos botões
  aoAlternarStatus = output<number>();
  aoRemover = output<number>();

  // Dispara o evento enviando o ID do item para o componente pai marcar como destinado/pendente
  clicarConcluir(): void {
    this.aoAlternarStatus.emit(this.item().id);
  }

  // Dispara o evento enviando o ID do item para o componente pai excluir da lista
  clicarRemover(): void {
    this.aoRemover.emit(this.item().id);
  }
}