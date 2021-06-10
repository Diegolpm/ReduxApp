import { createAction, props } from '@ngrx/store';

export const Incrementar = createAction('[Contador] Incrementar');
export const Decrementar = createAction('[Contador] Decrementar');
export const Multiplicar = createAction(
    '[Contador] Multiplicar',
    props<{ num: number }>()
);
export const Dividir = createAction(
    '[Contador] Dividir',
    props<{ divisor: number }>()
);
export const Reset = createAction('[Counter Component] Reset');