import { Component } from '@angular/core';
import { config } from './model/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'learning-angular';

  constructor() {
    this.title = config.title;
  }

}
