// Define a estrutura de cada item eletrônico que vamos cadastrar na lista
export interface ItemEletronico {
  id: number;
  nome: string;          // Ex: Cabo USB velho, Pilhas AA, Celular antigo
  categoria: string;     // Ex: Cabos e Carregadores, Pilhas e Baterias, Aparelhos
  pesoGramas: number;    // Peso estimado em gramas para calcular o impacto ambiental
  destinado: boolean;    // false = guardado em casa | true = já destinado corretamente
}