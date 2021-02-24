import { Component, VERSION } from "@angular/core";
import { LISTADO_CAMPEONES } from "./models/listado.global";
import { LISTADO_ASPECTOS } from "./models/listado.global";
import { Aspecto } from "./models/campeon.model";
import { Campeon } from "./models/campeon.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public titulo = "Aspectos de los campeones";
  public listado: string[] = LISTADO_CAMPEONES;
  public listado_aspectos: string[] = LISTADO_ASPECTOS;

  public campeones: Array<Campeon> = [
    /*{ nombre: "Aatrox", aspectos: new Array<Aspecto>() }*/
  ];

  ngOnInit() {
    console.log("hola oninit");
    this.cargaDatos();
    this.nuevoAspecto(
      "Sin imagen",
      "Hugo Odisea",
      "Epica",
      1350,
      false,
      false,
      false,
      false
    );
  }

  cargaDatos() {
    console.log("length: ", this.listado.length);
    for (let i = 0; i < this.listado.length; i++) {
      //cada campeon del array recibe el nombre del listado y el nuevo array de Aspectos
      //console.log("name: ", this.listado[i]);
      this.campeones[i] = new Campeon(this.listado[i], [
        /*
        new Aspecto("", "poto2", "", 0, false, false, false)
      */
      ]);
      /*if (i < 3) {
        console.log("nombre: ", this.campeones[i].nombre);
        console.log("aspecto: ", this.campeones[i].aspectos[0].nombre_aspecto);
      }*/
    }
    //this.campeones[0].aspectos[0].nombre_aspecto = "coscu";
  }

  nuevoAspecto(i, na, t, p, l, o, po, b) {
    //nuevo aspecto
    let nuevoAspecto: Aspecto = new Aspecto(i, na, t, p, l, o, po, b);
    //se añade al array de aspectos (que ya existe para cada campeon)
    let nuevosAspectos: Array<Aspecto> = [];
    //nuevosAspectos[0] = nuevoAspecto;
    nuevosAspectos.push(nuevoAspecto);
    //se agrega el nuevo array al nuevo campeon (que ya existen)
    let nuevoCampeon: Campeon = new Campeon("Hugo", nuevosAspectos);
    console.log("nuevoCampeon:", nuevoCampeon);
  }
}
