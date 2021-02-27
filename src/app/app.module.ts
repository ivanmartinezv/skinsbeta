import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//importar modulo de formularios
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
//modulos
//import { AppRoutingModule } from "./app-routing.module";
//firebase
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
//componentes
import { CampeonComponent } from "./components/campeon/campeon.component";
//servicios para BDD
import { CampeonService } from "./services/campeon.service";
//import { CampeonAddComponent } from "./components/campeon/listacampeonadd.component";

@NgModule({
  declarations: [
    AppComponent,
    //componentes
    CampeonComponent /*,
    CampeonAddComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule /*formularios*/,
    //AppRoutingModule, //no está este
    AngularFireModule.initializeApp(environment.firebase
  ],
  providers: [
    //servicios
    CampeonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
