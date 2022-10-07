import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  public name: string;
  public followers: number;

  constructor( private _route: ActivatedRoute, private _router: Router) {
    this.name = "";
    this.followers= 0;
   }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.name = params['name'];
       this.followers = +params['followers'];

      console.log(this.name)
    });
  }

  rediregir() {
    this._router.navigate(['/cookie']);
  }

}
