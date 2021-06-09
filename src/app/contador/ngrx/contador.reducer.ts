import { ActionCreator, createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { Decrementar, Incrementar, Multiplicar, Dividir, Reset } from "./contador.actions";


// export function contadorReducer(state: number = 10, action: ActionCreator) {
//     switch (action.type) {


//         case 'INCREMENTAR':
//             return state + 1;

//         case 'DECREMENTAR':
//             return state - 1;

//         default:
//             return state;
//     }
// }

export const initialState = 10;

const _contadorReducer = createReducer(
    initialState,
    on(Incrementar, (state) => state + 1),
    on(Decrementar, (state) => state - 1),
    on(Multiplicar, (state, { num }) => state * num),
    on(Dividir, (state, { divisor }) => state / divisor),
    on(Reset, (state) => 0)
);

export function contadorReducer(state, action) {
    return _contadorReducer(state, action);
}