import { Injectable } from '@angular/core';
import { ItemEletronico } from './item-eletronico.model';

@Injectable({
  providedIn: 'root'
})
export class ElixoService {
  // Chave única usada para identificar nossos dados dentro do localStorage do navegador
  private readonly CHAVE_STORAGE = 'elixo_zero_itens';

  // Lista em memória que guarda os itens eletrônicos cadastrados
  private itens: ItemEletronico[] = [];

  constructor() {
    // Etapa 1 da persistência (Carregar): assim que o service é iniciado ao abrir o app,
    // chamamos este método para buscar o que já estava salvo no navegador
    this.carregarDados();
  }

  // Método responsável por ler os dados do localStorage quando a aplicação abre
  private carregarDados(): void {
    const dadosSalvos = localStorage.getItem(this.CHAVE_STORAGE);

    if (dadosSalvos) {
      // O localStorage só guarda texto (string), então usamos JSON.parse
      // para transformar o texto salvo de volta em um array de objetos
      this.itens = JSON.parse(dadosSalvos);
    } else {
      // Se for a primeira vez abrindo o sistema e não houver nada salvo,
      // iniciamos com 2 exemplos para a tela não aparecer vazia
      this.itens = [
        { id: 1, nome: '3 Cabos micro-USB estragados', categoria: 'Cabos e Carregadores', pesoGramas: 120, destinado: false },
        { id: 2, nome: '4 Pilhas AA usadas', categoria: 'Pilhas e Baterias', pesoGramas: 90, destinado: true }
      ];
      this.salvarDados();
    }
  }

  // Etapa 2 da persistência (Salvar): sempre que a lista sofre qualquer alteração
  // (adicionar, concluir ou remover), gravamos a lista atualizada no localStorage
  private salvarDados(): void {
    // Usamos JSON.stringify para converter o array de objetos em texto (string)
    // antes de gravar no navegador
    localStorage.setItem(this.CHAVE_STORAGE, JSON.stringify(this.itens));
  }

  // Retorna todos os itens da lista
  listarItens(): ItemEletronico[] {
    return this.itens;
  }

  // Adiciona um novo item eletrônico na lista e salva no localStorage
  adicionarItem(nome: string, categoria: string, pesoGramas: number): void {
    const novoItem: ItemEletronico = {
      id: Date.now(), // Gera um número único baseado no timestamp atual
      nome,
      categoria,
      pesoGramas,
      destinado: false
    };

    this.itens.push(novoItem);
    this.salvarDados(); // Atualiza o localStorage após adicionar
  }

  // Alterna o status do item entre pendente (false) e destinado/concluído (true)
  alternarStatus(id: number): void {
    const item = this.itens.find(i => i.id === id);
    if (item) {
      item.destinado = !item.destinado;
      this.salvarDados(); // Atualiza o localStorage após concluir/reabrir
    }
  }

  // Remove um item da lista pelo ID e salva a mudança
  removerItem(id: number): void {
    this.itens = this.itens.filter(i => i.id !== id);
    this.salvarDados(); // Atualiza o localStorage após remover
  }

  // --- MÉTODOS DO DIFERENCIAL CRIATIVO (Calculadora de Impacto) ---

  // Soma o peso (em gramas) apenas dos itens que já foram marcados como destinados
  calcularPesoEvitado(): number {
    return this.itens
      .filter(item => item.destinado)
      .reduce((total, item) => total + item.pesoGramas, 0);
  }

  // Calcula os EcoPontos (1 ponto a cada 10 gramas destinadas corretamente)
  calcularEcoPontos(): number {
    return Math.floor(this.calcularPesoEvitado() / 10);
  }
}