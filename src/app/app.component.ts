import { Component, VERSION } from "@angular/core";
import {
  aspectos_aatrox,
  LISTADO_CAMPEONES,
  LISTADO_ASPECTOS
} from "./models/listado.global";
import { Aspecto } from "./models/campeon.model";
import { Campeon } from "./models/campeon.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public titulo = "Aspectos de los campeones";
  public listado_nombres: string[] = LISTADO_CAMPEONES;
  public aspectos_de_aatrox: {} = aspectos_aatrox;
  public listado_aspectos: {} = LISTADO_ASPECTOS;

  //array de campeones
  public campeones: Array<Campeon> = [
    /*{ id: 1, nombre: "Aatrox", aspectos: new Array<Aspecto>() }*/
    /*campeones[0],campeones[1],...,campeones[N]*/
  ];

  ngOnInit() {
    console.log("hola oninit");
    //carga IDs y nombres de los campeones
    this.cargaID_Nombres();

    //cargar datos de aatrox
    this.cargaAatrox(this.aspectos_de_aatrox);

    //cargar aspectos
    //this.cargaAspectos(this.listado_aspectos);

    //funcion de prueba
    this.nuevoAspecto(
      "Sin imagen",
      "Hugo Odisea",
      "Epica",
      1350,
      false,
      false,
      false,
      false,
      0
    );
  }

  cargaID_Nombres() {
    console.log("length: ", this.listado_nombres.length);
    for (let i = 0; i < this.listado_nombres.length; i++) {
      //cada campeon del array recibe el nombre del listado y el nuevo array de Aspectos
      //console.log("name: ", this.listado[i]);
      let id_temp: number = i + 1;
      let nombre_aspecto_temp: string = this.listado_nombres[i];
      let aspectos_temp: Aspecto[] = [];
      this.campeones[i] = new Campeon(
        id_temp,
        nombre_aspecto_temp,
        aspectos_temp
      );
      /*if (i < 2) {
        console.log(
          "this.campeones[" + i + "]:",
          this.campeones[i],
          "id: ",
          this.campeones[i].id,
          "nombre: ",
          this.campeones[i].nombre,
          "aspecto: ",
          this.campeones[i].aspectos
        );
      }*/
    }
    //this.campeones[0].aspectos[0].nombre_aspecto = "coscu";
  }

  cargaAatrox(skinsAA: any) {
    //EL ID DE AATROX ES 1 PERO SU UBICACION EN EL ARREGLO DE CAMPEONES ES 0, ADEMAS EL ID DE SU NOMBRE EN CADA ASPECTO TAMBIEN ES 1
    let id_aatrox = skinsAA[0].idc - 1;
    let cant_aspectos_aatrox = skinsAA.length;
    //recorrer los N aspectos de aatrox
    console.log("skinsAA.length: ", cant_aspectos_aatrox);
    for (let i = 0; i < cant_aspectos_aatrox; i++) {
      let nasp = new Aspecto(
        skinsAA[i].i,
        skinsAA[i].na,
        skinsAA[i].t,
        skinsAA[i].p,
        skinsAA[i].l,
        skinsAA[i].o,
        skinsAA[i].po,
        skinsAA[i].b,
        skinsAA[i].idc
      );
      console.log("cada aspecto: ", nasp);
      //asignar cada atributo del aspecto al nuevo aspecto del subarray
      console.log("array: ", this.campeones[id_aatrox].aspectos);
      this.campeones[id_aatrox].aspectos[i] = nasp;
      //console.log("que muestra?: ", this.campeones[0].aspectos);
    }
          console.log("array fuera for: ", this.campeones[id_aatrox].aspectos);

  }

  cargaAspectos(skins: any) {
    //recorrer los aspectos de aatrox
    console.log("skins.length: ", skins.length);
    for (let i = 0; i < skins.length; i++) {
      let nasp = new Aspecto(
        skins[i].i,
        skins[i].na,
        skins[i].t,
        skins[i].p,
        skins[i].l,
        skins[i].o,
        skins[i].po,
        skins[i].b,
        skins[i].id
      );
      //console.log("cada aspecto: ", nasp);
      //asignar cada atributo del aspecto al nuevo aspecto del subarray
      this.campeones[0].aspectos[i] = nasp;
      //console.log("que muestra?: ", this.campeones[0].aspectos);
    }
  }

  nuevoAspecto(i, na, t, p, l, o, po, b, idc) {
    //nuevo aspecto
    let nuevoAspecto: Aspecto = new Aspecto(i, na, t, p, l, o, po, b, idc);
    //se añade al array de aspectos (que ya existe para cada campeon)
    let nuevosAspectos: Array<Aspecto> = [];
    //nuevosAspectos[0] = nuevoAspecto;
    nuevosAspectos.push(nuevoAspecto);
    //se agrega el nuevo array al nuevo campeon (que ya existen)
    let nuevoCampeon: Campeon = new Campeon(-1, "Hugo", nuevosAspectos);
    //console.log("nuevoCampeon:", nuevoCampeon);
  }
}
