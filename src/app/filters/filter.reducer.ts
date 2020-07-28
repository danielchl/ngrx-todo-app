import { validFilters, setFilter } from "./filter.actions";
import { createReducer, on } from "@ngrx/store";

export const initialState: validFilters = "todos";

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filtro }) => filtro)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
