import { TODO } from "./todos/models/todo.models";
import { validFilters } from "./filters/filter.actions";

export interface AppState {
  todos: TODO[];
  filtro: validFilters;
}
