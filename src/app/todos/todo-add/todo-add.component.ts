import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { crear } from "../todo.actions";

@Component({
  selector: "app-todo-add",
  templateUrl: "./todo-add.component.html",
  styleUrls: ["./todo-add.component.css"],
})
export class TodoAddComponent implements OnInit {
  public txtInput: FormControl;

  constructor(private readonly _store: Store<AppState>) {
    this.txtInput = new FormControl("", Validators.required);
  }

  ngOnInit() {}

  public agregar(): void {
    console.log(this.txtInput.valid);

    if (this.txtInput.invalid) {
      return;
    }

    console.log(this.txtInput.value);
    this._store.dispatch(crear({ texto: this.txtInput.value }));

    this.txtInput.reset();
  }
}
