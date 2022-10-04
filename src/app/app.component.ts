import { Component } from '@angular/core';
import { config } from './model/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'learning-angular';
  public description: string;
  public configuration;
  public show_videogame: boolean = true;

  constructor() {
    this.title = config.title;
    this.description = config.description;
    this.configuration = config;
  }

  hideVideogame(value: boolean) {
    this.show_videogame = value;
  }
}
