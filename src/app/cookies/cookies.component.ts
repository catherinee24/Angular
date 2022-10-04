import { Component, OnInit } from '@angular/core';
import { Cookie } from '../model/cookie';

@Component({
  selector: 'cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
})
export class Cookies implements OnInit {
  public title: string;
  public flavors: string;
  public cookie: Array<Cookie>;

  constructor() {
    this.title = 'The best cookies in town';
    this.flavors = 'Most popular flavors';

    this.cookie = [
      new Cookie(
        'intense chocolate🍪',
        "catella's Cookies",
        'chocolate',
        "$5",
        true
      ),

      new Cookie(
        'redVelvet 🍪',
        "catella's Cookies",
        'chocolate and color',
        "$2.5",
        false
      ),

      new Cookie(
        'especial cookie 🍪',
        "catella's Cookies",
        'triple chocolate',
        "$3.2",
        true
      ),
    ];
  }
  ngOnInit() {
    console.log(this.cookie);
  }
}
