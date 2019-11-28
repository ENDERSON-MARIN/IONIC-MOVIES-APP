import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PeliculasService } from "../../services/peliculas.service";
import { Ipeliculas } from "../../model/peliculas.interface";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.page.html",
  styleUrls: ["./peliculas.page.scss"]
})
export class PeliculasPage implements OnInit {
  results: Observable<Ipeliculas>;
  term: string = "";
  type: string = "";

  constructor(private peliService: PeliculasService) {}

  ngOnInit() {}

  searchChanged(): void {
    this.results = this.peliService.searchMovies(this.term, this.type);
  }
}
