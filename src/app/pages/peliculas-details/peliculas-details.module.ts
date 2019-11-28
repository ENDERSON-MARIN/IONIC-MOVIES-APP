import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PeliculasDetailsPageRoutingModule } from "./peliculas-details-routing.module";

import { PeliculasDetailsPage } from "./peliculas-details.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasDetailsPageRoutingModule
  ],
  declarations: [PeliculasDetailsPage]
})
export class PeliculasDetailsPageModule {}
