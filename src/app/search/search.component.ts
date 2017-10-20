import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class Search {
  public valore:String;
  //public list: String[]; 
  //public artisti: Object[];
  @Output() callArtista: EventEmitter<String> = new EventEmitter<String>();

  constructor() {
    this.valore = "";
  }
  updateArtista( event ){
    this.valore = event.target.value;

    console.log(this.valore);
  }
  searchArtista( event ){
    this.callArtista.emit( this.valore );
  }
}