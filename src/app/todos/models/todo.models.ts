import { text } from "@angular/core/src/render3/instructions";

export class TODO {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {

    console.log(texto);
    

    this.texto = texto;

    this.id = Math.random();

    this.completado = false;
  }
}
