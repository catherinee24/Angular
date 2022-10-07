import { Component, OnInit } from '@angular/core';
import { config } from '../model/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public title = 'learning-angular';
  public description: string;
  public identificado: boolean;

  constructor() {
    this.title = config.title;
    this.description = config.description;
    this.identificado = false;
  }

  ngOnInit(): void {}

  setIdentificado() {
    this.identificado = true;
  }
  unsetIdentificado() {
    this.identificado = false;
  }
}
