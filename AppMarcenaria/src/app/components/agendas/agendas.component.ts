import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { AgendasService } from 'src/app/agendas.service';
import { Agenda } from 'src/app/Agenda';
// import { ModelosService } from 'src/app/modelos.service';
// import { Modelo } from 'src/app/Modelo';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.css']
})
export class AgendasComponent implements OnInit{

  formulario: any;
  tituloFormulario: string = '';

  constructor(private agendasService : AgendasService) { }

  ngOnInit(): void {
    this.tituloFormulario = 'Nova Agenda';
    this.formulario = new FormGroup({
      // placa: new FormControl(null),
      // descricao: new FormControl(null)

      descricao: new FormControl(null),
      data: new FormControl(null),
      tipo: new FormControl(null),
      funcionarioId: new FormControl(null)


    })
  }

  enviarFormulario(): void {
    const agenda : Agenda = this.formulario.value;
    this.agendasService.cadastrar(agenda).subscribe(result => {
      alert('Agenda inserida com sucesso.');
    })
}
}
