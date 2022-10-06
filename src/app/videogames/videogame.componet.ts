import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css'],
})
export class VideogameComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;
  public list: string;
  public show_videogame: boolean = true;

  constructor() {
    this.title = 'Videogame Component';
    this.list = 'Top 3 Videogames at the moment';
  }

  ngOnInit() {
    console.log('OnInit executed!');
  }

  ngDoCheck() {
    console.log('DoCkeck executed!');
  }

  ngOnDestroy() {
    console.log('OnDestroy executed');
  }

  changeTitle() {
    this.title = 'New Title Baby';
  }

  hideVideogame(value: boolean) {
    this.show_videogame = value;
  }
}
