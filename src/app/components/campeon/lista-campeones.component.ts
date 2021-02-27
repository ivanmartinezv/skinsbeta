import { Component, OnInit } from "@angular/core";
//formularios
import { FormControl, FormGroup, Validators } from "@angular/forms";
//modelos
import { Campeon } from "../../models/campeon.model";
//servicios
import { CampeonService } from "../../services/campeon.service";

@Component({
  selector: "app-campeon",
  templateUrl: "./lista-campeones.component.html",
  styleUrls: ["./lista-campeones.component.css"]
})

//COMPONENTE CREADO PARA IMPLEMENTAR UN MODELO NO RELACIONAL DE DATOS
export class ListaCampeonesComponent implements OnInit {
  public titulo = "Listado de Campeones";
  //hay que importar la clase Campeon de "./models/campeon.model";
  //enviar o borrar datos estaticos a Firebase
  public enviarDatos: boolean = false;
  public borrarDatos: boolean = false;
  //hay que leer los campeones de firebase --> LISTADO_CAMPEONES
  public listado_nombres: string[] = []; //LISTADO_CAMPEONES;
  //array de campeones
  public allCampeones: Array<Campeon> = [];

  //(I) Array que contendrá los datos de firebase
  public campeones: any[] = []; //no se usa Campeon[]
  //(II) atributos para editar productos
  public documentId = null;

  /*La app maneja 2 estados, currentStatus = 0 -> la app se encuentra en modo de creación?? de documentos, ó currentStatus = 1 -> la app se encuentra en modo de edición?? de documentos. */
  public currentStatus = 1;
  public newCampeonForm = new FormGroup({
    nombre: new FormControl("", Validators.required),
    url: new FormControl("", Validators.required),
    id: new FormControl("")
    //al enviar los datos del formulario, hay que agregar los CONTADORES
  });

  constructor(private _campeonService: CampeonService) {
    //funcion con los datos que trae el servicio
    this.newCampeonForm.setValue({
      id: "",
      nombre: "",
      url: ""
    });
  }

  ngOnInit() {
    //el ngOnInit es el que invoca al servicio para LEER datos de BDD
    this._campeonService.getCampeones().subscribe(campeonesSnapshot => {
      this.campeones = [];
      campeonesSnapshot.forEach((campeonData: any) => {
        this.campeones.push({
          id: campeonData.payload.doc.id,
          data: campeonData.payload.doc.data()
        });
      });
    });
  }

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
