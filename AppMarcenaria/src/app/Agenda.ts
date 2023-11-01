export class Agenda {
    id: number;
    descricao?: string;
    data: Date;
    tipo?: string;
    funcionarioId: number;

    constructor(id: number, data: Date, funcionarioId: number, descricao?: string, tipo?: string) {
        this.id = id;
        this.data = data;
        this.funcionarioId = funcionarioId;
        this.descricao = descricao;
        this.tipo = tipo;
    }
}
