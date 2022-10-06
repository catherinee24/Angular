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

  constructor() {
    this.title = config.title;
    this.description = config.description;
  }

  ngOnInit(): void {}
}
