import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import { toggleAll } from "../todo.actions";

@Component({
  selector: "app-todo-page",
  templateUrl: "./todo-page.component.html",
  styleUrls: ["./todo-page.component.css"],
})
export class TodoPageComponent implements OnInit {
  public toggleAllChk: FormControl;

  // public completado: boolean = false;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.toggleAllChk = new FormControl(false);

    this.toggleAllChk.valueChanges.subscribe((value) => {
      this.toggleAll(value);
    });
  }

  public toggleAll(completado: boolean): void {
    console.log(completado);
    this._store.dispatch(toggleAll({ completado }));
  }
}
