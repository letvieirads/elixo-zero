import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ElixoService } from '../elixo.service';
import { ItemCardComponent } from '../item-card/item-card'; // Ajuste para './item-card.component' se o seu arquivo tiver .component no nome

@Component({
  selector: 'app-lista-elixo',
  standalone: true,
  imports: [FormsModule, ItemCardComponent],
  templateUrl: './lista-elixo.html', // Mantenha .component.html se for o nome do seu arquivo
  styleUrl: './lista-elixo.css'      // Mantenha .component.css se for o nome do seu arquivo
})
export class ListaElixoComponent {
  // Injeta o service que gerencia a lista e o localStorage
  elixoService = inject(ElixoService);

  // Variáveis ligadas aos campos do formulário via [(ngModel)]
  novoNome: string = '';
  novaCategoria: string = 'Cabos e Carregadores';
  novoPeso: number | null = null;

  // Chamado ao enviar o formulário para adicionar um novo eletrônico na lista
  adicionar(): void {
    if (!this.novoNome.trim() || !this.novoPeso || this.novoPeso <= 0) {
      return;
    }

    this.elixoService.adicionarItem(this.novoNome.trim(), this.novaCategoria, this.novoPeso);

    // Limpa os campos do formulário após salvar
    this.novoNome = '';
    this.novaCategoria = 'Cabos e Carregadores';
    this.novoPeso = null;
  }

  // Recebe o evento output() do componente filho para concluir ou reabrir o item
  alternarStatus(id: number): void {
    this.elixoService.alternarStatus(id);
  }

  // Recebe o evento output() do componente filho para excluir o item
  remover(id: number): void {
    this.elixoService.removerItem(id);
  }
}