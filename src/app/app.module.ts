import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//importar modulo de formularios
import { FormsModule } from "@angular/forms";
//primeras 2
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
//siguientes 3
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
//servicios para BDD
import { CampeonService } from "./services/campeon.service";
//componentes (importados a partir de la ejecucion del comando ng c c components/XXX)
import { ListaComponent } from "./components/lista/lista.component";
import { ListaAddComponent } from "./components/lista-add/lista-add.component";

@NgModule({
  declarations: [AppComponent, ListaComponent, ListaAddComponent],
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
