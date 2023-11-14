export class Agenda {
  id: number;
  descricao?: string;
  data: Date;
  tipo?: string;
  funcionarioId: number;

  constructor(id: number, data: Date, funcionarioId: number, descricao?: string, tipo?: string) {
    this.id = id;
    this.descricao = descricao;
    this.data = data;
    this.tipo = tipo;
    this.funcionarioId = funcionarioId;
  }
}
