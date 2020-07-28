import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { TODO } from "../models/todo.models";
import { validFilters } from "src/app/filters/filter.actions";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  public todos: TODO[] = [];
  public filtroActual: validFilters;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    // this._store.select("todos").subscribe((todos) => (this.todos = todos));
    this._store.subscribe((state) => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    });
  }
}
