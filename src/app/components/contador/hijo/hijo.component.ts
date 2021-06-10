import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { props, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dividir, Multiplicar } from '../../../common/ngrx/actions/contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  contador: number;
  num: number = 5;
  contador$: Observable<number>
  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  constructor(private store: Store<{ contador: number }>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => {
        this.contador = contador;
      })
  }

  multiplicar() {
    let n: number = 5;
    this.store.dispatch(Multiplicar({ num: n }))
    // this.contador *= 2
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    let n: number = 2;
    this.store.dispatch(Dividir({ divisor: n }))
    // this.contador /= 2
    // this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }

}
