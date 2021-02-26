//ng g c components/lampeon
import { Component, OnInit } from "@angular/core";
import { Campeon } from "../../models/campeon.model";
import { CampeonService } from "../../services/campeon.service";

//interfaz de un string (sustituye clase.ts)
export interface Item {
  name: string;
}

export interface Campeon {
  nombre: string;
}

@Component({
  selector: "lista-campeones",
  templateUrl: "./lista-campeones.component.html",
  styleUrls: ["./lista-campeones.component.css"]
})
//COMPONENTE CREADO PARA IMPLEMENTAR UN MODELO NO RELACIONAL DE DATOS
//https://stackoverflow.com/questions/56081903/ionic-firestore-cannot-find-module-angular-fire-firestore
export class ListaCampeonesComponent implements OnInit {
  //lista tipo any
  items: any;
  //item auxiliar para editar
  editarItem: any = {
    name: ""
  };

  //lista campeones
  campeones: any;
  //campeon auxiliar para editar
  editarCampeon: any = {
    //atributos
    nombre: ""
  };

  public titulo = "Listado de Campeones";
  //hay que importar la clase Campeon de "./models/campeon.model";
  //hay que leer los campeones de firebase --> LISTADO_CAMPEONES
  public listado_nombres: string[] = []; //LISTADO_CAMPEONES;
  //array de campeones
  public allCampeones: Array<Campeon> = [];

  //el constructor es el que invoca al servicio para cargar datos de BDD
  constructor(private _campeonService: CampeonService) {
    //se invoca al servicio para que su funcion lista() traiga los datos de firebase
    this._campeonService.listaCampeones().subscribe(campeon => {
      this.campeones = campeon;
      console.log("this.campeones: ", this.campeones);
    });
  }

  //se podria decir que el ngOnInit carga datos estaticos
  ngOnInit(): void {}

  eliminar(item: Item) {
    this._campeonService.eliminarItem(item);
  }

  editar(item: Item) {
    console.log("editar!");
    //el item auxiliar recibe el item por editar
    this.editarItem = item;
    console.log(this.editarItem);
  }

  agregarItemEditado() {
    //llamar al servicio para editar el item en la bdd
    this._campeonService.editarItem(this.editarItem);
  }

  /*cargaID_Nombres() {
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
  /*}
  }*/
}
