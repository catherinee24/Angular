import { Injectable } from "@angular/core";
import { Cookie } from '../model/cookie';

@Injectable()
export class cookiesService {
    public cookie: Array<Cookie>;
    constructor() {
        this.cookie = [
            new Cookie(
              'intense chocolate🍪',
              "catella's Cookies",
              'chocolate',
              'bigger',
              4.2,
              true
            ),
      
            new Cookie(
              'redVelvet 🍪',
              "catella's Cookies",
              'chocolate and color',
              'mid',
              3,
              false
            ),
      
            new Cookie(
              'especial cookie 🍪',
              "catella's Cookies",
              'triple chocolate',
              'supreme',
              5,
              true
            ),
            new Cookie(
              'monday special 🍪',
              "catella's Cookies",
              'cheesecake',
              'small',
              2.2,
              false
            ),
          ];
    }

    getText() {
        return 'hello world from a service';
    }

    getCookies(): Array<Cookie> {
        return this.cookie;
    }
}