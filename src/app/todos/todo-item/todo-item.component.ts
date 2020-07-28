import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { TODO } from "../models/todo.models";
import { FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { toggle, editar, borrar } from "../todo.actions";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  @Input()
  public todo: TODO;

  @ViewChild("editInput")
  public editInput: ElementRef;

  public chkCompletado: FormControl;
  public txtInput: FormControl;

  public editando: boolean = false;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe((value) => {
      this._store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  public editar() {
    this.editando = true;

    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.editInput.nativeElement.select();
    }, 2);
  }

  public endEdit() {
    this.editando = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return;
    }

    this._store.dispatch(
      editar({ id: this.todo.id, texto: this.txtInput.value })
    );
  }

  public borrar() {
    this._store.dispatch(borrar({ id: this.todo.id }));
  }
}
