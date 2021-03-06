import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})

//CONEXION BDD Y CRUD
export class CampeonService {
  //constructor
  constructor(private afs: AngularFirestore) {
    //vacio
  }

  //A. Enviar nombres de campeones a firebase
  public enviarDatos(nombres_campeones: any) {
    let allNombres = nombres_campeones; //ACA VOY, NO SE SI
    for (let i = 0; i < allNombres.length; i++) {
      console.log(i + 1, ": ", allNombres[i]);
      let data_temp: { nombre: string; url: string } = {
        nombre: allNombres[i],
        url: ""
      };
      this.afs.collection("campeones_temp").add(data_temp);
    }
  }

  //(1) Crea un nuevo campeon
  public createCampeon(data: { nombre: string; url: string }) {
    return this.afs.collection("campeones").add(data);
  }

  //(2) Obtiene un campeon
  public getCampeon(documentId: string) {
    return this.afs
      .collection("campeones")
      .doc(documentId)
      .snapshotChanges();
  }

  //(3) Obtiene todos los campeones
  public getCampeones() {
    return this.afs.collection("campeones").snapshotChanges();
  }

  //(4) Actualiza un campeon
  public updateCampeon(documentId: string, data: any) {
    return this.afs
      .collection("campeones")
      .doc(documentId)
      .set(data);
  }

  //(5) Elimina un campeon
  public deleteCampeon(documentId: string) {
    return this.afs
      .collection("campeones")
      .doc(documentId)
      .delete();
  }
}
