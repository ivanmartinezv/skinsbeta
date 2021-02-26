//Generar el servicio desde la consola (dentro del proyecto)
//ng g s services/campeon

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//importar .map
import { map } from "rxjs/operators";

//importaciones
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
//para eliminar
import { AngularFirestoreDocument } from "@angular/fire/firestore";

//interfaz de un string (sustituye clase.ts)
export interface Item {
  name: string;
}
export interface Campeon {
  nombre: string;
}
//import { Campeon } from "../models/campeon.model";

@Injectable({
  providedIn: "root"
})

//CONEXION BDD Y CRUD
export class CampeonService {
  //variables
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  //para eliminar
  private itemDoc: AngularFirestoreDocument<Item>;

  //variables para campeon
  private campeonesCollection: AngularFirestoreCollection<Item>;
  campeones: Observable<Item[]>;
  //para eliminar
  private campeonDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    //variable que recibe los items de firestore
    this.itemsCollection = afs.collection<Item>("items");

    //variable que recibe los campeones de firestore
    this.campeonesCollection = afs.collection<Campeon>("campeones");

    //this.items = this.itemsCollection.valueChanges();

    /*this.items = this.itemsCollection.snapshotChanges().map(actions => {
    	return actions.map(a => {
	        const data = a.payload.doc.data() as Item;
	        const id = a.payload.doc.id;
	        return { id, ...data };
    	});
    });*/

    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          console.log("dentro de snapshotChanges");
          const data = a.payload.doc.data() as Item;
          const id = a.payload.doc.id; //a.payload.doc['id']
          return { id, ...data };
        })
      )
    );

    //ASIGNACION PARA CAMPEONES
    /*this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          console.log("dentro de snapshotChanges");
          const data = a.payload.doc.data() as Item;
          const id = a.payload.doc.id; //a.payload.doc['id']
          return { id, ...data };
        })
      )
    );*/
  }

  //funcion retorna todos los items capturados
  listaCampeones() {
    //datos precargados en el constructor
    return this.items;
  }

  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }

  eliminarItem(item: Item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }

  editarItem(item: Item) {
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    //modificar solo el item seleccionado
    this.itemDoc.update(item);
  }
}
