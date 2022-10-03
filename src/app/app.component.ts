import { Component, VERSION } from '@angular/core';
import { Mazo } from './mazo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  listar() {
    let d = new Mazo();
    // d.shuffle();
    console.log(d);
  }
}
