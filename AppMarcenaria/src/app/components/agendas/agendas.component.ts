// agendas.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgendasService } from 'src/app/agendas.service';
import { Agenda } from 'src/app/Agenda';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.css']
})
export class AgendasComponent implements OnInit {
  formulario!: FormGroup;  // Alteração aqui
  tituloFormulario: string = '';
minhaAgenda: any;
agenda: any;

  constructor(private formBuilder: FormBuilder, private agendasService: AgendasService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Agenda';
    this.formulario = this.formBuilder.group({
      descricao: [null],
      data: [null],
      tipo: [null],
      funcionarioId: [null],
    });
  }

  enviarFormulario(): void {
    const agenda: Agenda = this.formulario.value as Agenda;
    this.agendasService.cadastrar(agenda).subscribe(result => {
      alert('Agenda inserida com sucesso.');
    });
  }
}
