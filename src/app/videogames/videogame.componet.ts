import { Component } from '@angular/core';

@Component({
  selector: 'videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css'],
})
export class VideogameComponent {
  public title: string;
  public list: string;

  constructor() {
    this.title = 'Videogame Component';
    this.list = 'Top 3 Videogames at the moment';

    console.log('Se ha cargado el componente');
  }
}
