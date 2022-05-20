import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-fumantes';
  cigarroDias: number = 1;
  anosFumando: number = 1;
  tempoPerdidoPorCigarro = 10;
  calculoDiasPerdidos() {
    let decimal_calc =  (this.tempoPerdidoPorCigarro * this.cigarroDias * this.anosFumando * 365) / (24 * 60);
    let days = Math.floor(decimal_calc);
    let hour = Math.floor((decimal_calc - days) * 24)
    return days + ' dias e ' + hour + ' horas';
  }
}
