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
  public listado_aspectos = LISTADO_ASPECTOS;
  //array de campeones
  public campeones: Array<Campeon> = [
    /*campeones[0],campeones[1],...,campeones[N]*/
  ];

  //CONTADORES TOTALES
  public total_aspectos: number = this.listado_aspectos.length;
  public total_obtenibles: number = 0;
  public total_posesion: number = 0;
  public total_botin: number = 0;

  ngOnInit() {
    console.log("hola oninit");
    //carga IDs y nombres de los campeones
    this.cargaID_Nombres();

    //cargar datos de aatrox
    //this.cargaAatrox(this.aspectos_de_aatrox);

    //cargar aspectos
    this.cargaAspectos(this.listado_aspectos);

    //funcion de prueba
    /*this.nuevoAspecto(
      "Sin imagen",
      "Hugo Odisea",
      "Epica",
      1350,
      false,
      false,
      false,
      false,
      0
    );*/
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
  }

  cargaAatrox(skinsAA: any) {
    //EL ID DE AATROX ES 1 PERO SU UBICACION EN EL ARREGLO DE CAMPEONES ES 0, ADEMAS EL ID DE SU NOMBRE EN CADA ASPECTO TAMBIEN ES 1
    let id_aatrox = skinsAA[0].idc - 1;
    let cant_aspectos_aatrox = skinsAA.length;
    //recorrer los N aspectos de aatrox
    console.log("skinsAA.length: ", cant_aspectos_aatrox);
    for (let i = 0; i < cant_aspectos_aatrox; i++) {
      //asignar cada atributo del aspecto al nuevo aspecto
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
      //console.log("array: ", this.campeones[id_aatrox].aspectos);
      //añade Aspecto al array de aspectos del i-esimo campeon
      this.campeones[id_aatrox].aspectos[i] = nasp;
      //console.log("cada aspecto: ", nasp);
    }
    //console.log("array fuera for: ", this.campeones[id_aatrox].aspectos);
  }

  cargaAspectos(allSkins: any) {
    //el total de aspectos en el array allSkins es el tope de iteraciones
    let total_aspectos = allSkins.length;
    console.log("allSkins.length: ", total_aspectos);
    //recorrer todos los aspectos del arreglo
    for (let i = 0; i < total_aspectos; i++) {
      //se crea un Aspecto cuyos atributos vienen del array de aspectos
      let nasp = new Aspecto(
        allSkins[i].i,
        allSkins[i].na,
        allSkins[i].t,
        allSkins[i].p,
        allSkins[i].l,
        allSkins[i].o,
        allSkins[i].po,
        allSkins[i].b,
        allSkins[i].idc
      );
      //console.log("cada aspecto: ", nasp);
      //el ID de cada campeon es correlativo a partir de 1, pero
      //la ubicacion del campeon en el array Campeones es ID-1
      //ademas, cada aspecto posee el ID del campeon pero que no es su posicion en el array Campeones
      let index_champ = allSkins[i].idc - 1;

      //estos IF actualizan los contadores de Obtenible, Posesion y Botin de cada aspecto del campeon
      if (allSkins[i].o) {
        this.campeones[index_champ].cont_obtenible++;
        this.total_obtenibles++;
      }
      if (allSkins[i].po) {
        this.campeones[index_champ].cont_posesion++;
        this.total_posesion++;
      }
      if (allSkins[i].b) {
        this.campeones[index_champ].cont_botin++;
        this.total_botin++;
      }
      //console.log("array (se espera vacio): ", this.campeones[index_champ].aspectos);
      //añade el i-esimo Aspecto del json al array de aspectos del Campeon
      this.campeones[index_champ].aspectos.push(nasp); //se evita usar el .size() para conocer el tamaño actual
    }
    //console.log("array fuera for: ", this.campeones[index_champ].aspectos);
  }

  //funcion de prueba
  nuevoAspecto(i, na, t, p, l, o, po, b, idc) {
    //nuevo aspecto
    let nuevoAspecto: Aspecto = new Aspecto(i, na, t, p, l, o, po, b, idc);
    //se añade al array de aspectos (que ya existe para cada campeon)
    let nuevosAspectos: Array<Aspecto> = [];
    //nuevosAspectos[0] = nuevoAspecto;
    nuevosAspectos.push(nuevoAspecto);
    //se agrega el nuevo array al nuevo campeon (que ya existe)
    let nuevoCampeon: Campeon = new Campeon(-1, "Hugo", nuevosAspectos);
    //console.log("nuevoCampeon:", nuevoCampeon);
  }
}
