import { Component } from '@angular/core';

import { Detail } from './detail/detail.component';
import { List } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ Detail, List ]
})
export class AppComponent {
  title = 'Lista e click via api';
  constructor(){
    //constructor( private detail: Detail, private list: List){
    //codice di m commentato
    //console.log( detail );
    //console.log( list );
  }
}
