import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../services/peliculas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-peliculas-details",
  templateUrl: "./peliculas-details.page.html",
  styleUrls: ["./peliculas-details.page.scss"]
})
export class PeliculasDetailsPage implements OnInit {
  content: any = null;

  constructor(
    private peliService: PeliculasService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.peliService
      .getDetails(id)
      .subscribe(result => (this.content = result));
  }
}
