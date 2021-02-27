import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//importar modulo de formularios
import { FormsModule } from "@angular/forms";
import { environment } from "../environments/environment";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

/*import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";*/

//import { AngularFireAuth } from '@angular/fire/auth';//no se usa
//import { FirebaseService } from "./service/firebase.service";//no se usa

//servicios para BDD
import { CampeonService } from "./services/campeon.service";
//componentes (importados a partir de la ejecucion del comando ng c c components/XXX)
import { ListaCampeonesComponent } from "./components/campeon/lista-campeones.component";
import { ListaCampeonesAddComponent } from "./components/campeon/listacampeonadd.component";

@NgModule({
  declarations: [
    AppComponent,
    ListaCampeonesComponent,
    ListaCampeonesAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule /*formularios*/,
    //AppRoutingModule, //no está este
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    //servicios
    CampeonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
