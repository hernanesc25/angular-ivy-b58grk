import { Component, OnInit } from '@angular/core';
import { Carta } from '../carta';
import { Mazo } from '../mazo';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css'],
})
export class MayorMenorComponent implements OnInit {
  carta: Carta;
  mazo: Mazo = new Mazo();
  vidas: number = 3;
  puntaje: number = 0;

  constructor() {}

  ngOnInit() {
    this.mazo.shuffle();
    this.carta = this.mazo.draw();
  }

  jugar(carta: Carta, mayor_menor: string): void {
    let valorActual = carta.valor;

    this.carta = this.mazo.draw();

    if (mayor_menor == 'mayor') {
      if (this.carta.valor > valorActual) {
        this.puntaje++;
      } else {
        this.vidas--;
      }
    } else {
      if (this.carta.valor < valorActual) {
        this.puntaje++;
      } else {
        this.vidas--;
      }
    }

    if (this.vidas == 0) {
      console.log('Juego terminado');
      console.log(this.puntaje);
    }

    if (this.mazo.length() == 0) {
      console.log('Juego terminado ganador');
      console.log(this.mazo);
      console.log(this.puntaje);
    }
  }
}
