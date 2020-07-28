import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import { validFilters } from "src/app/filters/filter.actions";
import { setFilter } from "../../filters/filter.actions";
import { limpiarCompletados } from "../todo.actions";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styleUrls: ["./todo-footer.component.css"],
})
export class TodoFooterComponent implements OnInit {
  public filtroActual: validFilters;

  public filtros: validFilters[] = ["todos", "pendientes", "completados"];

  public pendientes: number = 0;

  constructor(private _store: Store<AppState>) {
    // this._store
    //   .select("filtro")
    //   .subscribe((filtro) => (this.filtroActual = filtro));

    this._store.subscribe(({ todos, filtro }) => {
      this.filtroActual = filtro;

      this.pendientes = todos.filter((todo) => !todo.completado).length;
    });
  }

  ngOnInit() {}

  public cambiarFiltro(filtro: validFilters) {
    this._store.dispatch(setFilter({ filtro }));
  }

  public limpiarCompletados() {
    this._store.dispatch(limpiarCompletados());
  }
}
