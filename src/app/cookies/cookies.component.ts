import { Component, OnInit } from '@angular/core';
import { Cookie } from '../model/cookie';
import { cookiesService } from '../services/cookies.service';

@Component({
  selector: 'cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
  providers: [cookiesService]
})
export class CookiesComponent implements OnInit {
  public title: string;
  public flavors: string;
  public cookie: Array<Cookie>;
  public sizes: String[];
  public masVendida: string;
  public my_flavor: string;

  constructor(private _cookiesService: cookiesService) {
    this.title = 'The best cookies in town';
    this.flavors = 'Most popular flavors of the month';
    this.sizes = new Array();
    this.masVendida = '';
    this.my_flavor = '';
    this.cookie = [];
  }

  ngOnInit() {
   this.cookie = this._cookiesService.getCookies()
  //  alert(this._cookiesService.getText());

    this.getSizes();
  }

  getSizes() {
    this.cookie.forEach((Cookie, index) => {
      if (this.sizes.indexOf(Cookie.size) < 0) {
        this.sizes.push(Cookie.size);
      }
      console.log(index);
    });
    console.log(this.sizes);
  }

  getFlavor() {
    alert(this.my_flavor);
  }

  addSizes() {
    this.sizes.push(this.my_flavor);
  }

  deleteSize(index: any) {
    //  delete this.sizes[index];
    this.sizes.splice(index, 1);
  }

  onBlur() {
    console.log('Has salido del input');
  }

  showWord() {
    alert(this.my_flavor);
  }
}
