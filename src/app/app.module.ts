import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { TodoModule } from "./todos/todo.module";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./todos/todo.reducer";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { appReducers } from "./app.reducer";
import { FiltroPipe } from "./filters/filtro.pipe";

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
