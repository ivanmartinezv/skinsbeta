//ng g c components/lampeon
import { Component, OnInit } from "@angular/core";
import { Campeon } from "../../models/campeon.model";
import { CampeonService } from "../../services/campeon.service";

//interfaz de un string (sustituye clase.ts)
export interface Item {
  name: string;
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

  constructor(private _campeonService: CampeonService) {
    //se invoca al servicio para que su funcion lista() traiga los datos de firebase
    this._campeonService.listaItem().subscribe(item => {
      this.items = item;
      console.log(this.items);
    });
  }

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
}
