import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrementar, Incrementar } from './contador/ngrx/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;
  contador$: Observable<number>

  constructor(private store: Store<{ contador: number }>) {
    this.contador$ = store.select('contador');
  }

  incrementar() {
    this.store.dispatch(Incrementar());
    // this.contador += 1;
    // this.contador ++;
  }

  decrementar() {
    this.store.dispatch(Decrementar());
    // this.contador -= 1;
    // this.contador --;
  }


}
