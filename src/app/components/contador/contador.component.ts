import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrementar, Incrementar } from 'src/app/common/ngrx/actions/contador.action';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  contador$: Observable<number>

  constructor(private store: Store<{ contador: number }>) {
    this.contador$ = store.select('contador');
  }

  ngOnInit(): void {
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
