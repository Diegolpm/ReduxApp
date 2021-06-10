import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Reset } from '../../../common/ngrx/actions/contador.action';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  // @Input() contador: number;
  // @Output() contadorCambio = new EventEmitter<number>();
  contador$: Observable<number>;

  constructor(private store: Store<{ contador: number }>) { }

  ngOnInit(): void {
    this.contador$ = this.store.select('contador');
  }

  reset() {
    this.store.dispatch(Reset());
    // this.contador = 0;
    // this.contadorCambio.emit(0);
  }

}
