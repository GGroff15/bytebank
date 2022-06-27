import { TransferenciaService } from './../service/transferencia.service';
import { Transferencia } from './../models/transferencia/transferencia.module';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: string = '';

  constructor(private service: TransferenciaService, private router: Router) {

  }

  transferir(): void {
    console.log("Transferir")
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino}

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('extrato');
      }
    );
  }

}
