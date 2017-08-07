import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})

export class Detail {

  public title: String;
  public content: String;

  constructor( ) {
    this.title = "name" ;
    this.content = "contenuto da aggiornare";
  }
  setNome( nome ){
    this.title = nome;
  }
}