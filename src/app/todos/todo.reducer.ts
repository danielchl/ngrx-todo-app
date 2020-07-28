import { createReducer, on } from "@ngrx/store";
import {
  crear,
  toggle,
  editar,
  borrar,
  toggleAll,
  limpiarCompletados,
} from "./todo.actions";
import { TODO } from "./models/todo.models";

const initialState: TODO[] = [
  new TODO("Primer TODO"),
  new TODO("2nd TODO"),
  new TODO("3er TODO"),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => {
    console.log(texto);

    return [...state, new TODO(texto)];
  }),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: todo.id === id ? !todo.completado : todo.completado,
      };
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      return {
        ...todo,
        texto: todo.id === id ? texto : todo.texto,
      };
    });
  }),
  on(borrar, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  }),
  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    });
  }),
  on(limpiarCompletados, (state) => {
    return state.filter((todo) => !todo.completado);
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
