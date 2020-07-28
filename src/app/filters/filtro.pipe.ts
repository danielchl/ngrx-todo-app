import { Pipe, PipeTransform } from "@angular/core";
import { TODO } from "../todos/models/todo.models";
import { validFilters } from "src/app/filters/filter.actions";

@Pipe({
  name: "filtroTodo",
})
export class FiltroPipe implements PipeTransform {
  transform(todos: TODO[], filtro: validFilters): any {
    switch (filtro) {
      case "completados":
        return todos.filter((todo) => todo.completado);

        break;
      case "pendientes":
        return todos.filter((todo) => !todo.completado);
        break;
      default:
        return todos;
        break;
    }
  }
}
