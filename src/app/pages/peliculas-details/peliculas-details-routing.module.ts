import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PeliculasDetailsPage } from "./peliculas-details.page";

const routes: Routes = [
  {
    path: "",
    component: PeliculasDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasDetailsPageRoutingModule {}
