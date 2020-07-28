import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filters/filter.reducer";

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filterReducer,
};
