import {Component} from '@angular/core';

@Component({
  selector: 'cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
})
export class Cookies {
  public title: string;
  public flavors: string;

  constructor() {
    this.title = 'The best cookies in town';
    this.flavors = 'Most popular flavors';

    console.log('we are here forever!');
  }
}