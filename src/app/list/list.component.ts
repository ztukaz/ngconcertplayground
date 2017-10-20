import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class List implements OnInit {

  public list: String[]; 
  public artisti: Object[];
  @Input() artistToPush: string;
  @Output() aggiornaLista: EventEmitter<String> = new EventEmitter<String>();

  constructor(  private http: HttpClient ) {
    this.list = [
      'madonna',
      'vasco rossi',
      'ligabue',
      'queen',
      'koorpiklaani',
      'coldplay',
      'oasis',
      'beatles',
      'justin beaber'
    ];

    this.list = [];
    this.artisti = [];
  }
  ngOnInit(): void {
    this.list.forEach( artist => {
      let call = 'https://rest.bandsintown.com/artists/'+artist+'?app_id=test_app';
      this.http.get( call )
      .subscribe( ( responsejson ) => {
        if ( responsejson ){
          this.artisti.push( responsejson );
        }
      }, ( error ) => {
        console.log( "non funzia" );
      });
    });
  }

  ngOnChanges(e){
    console.log(e.artistToPush.currentValue);
    //if(!e.artistToPush.firstChange){
    //  let artistName = e.nomeartista.currentValue;
    //  this.title = artistName;
    //  this.showEvent(artistName);
    //}
  }

  onClick( event ){
    this.aggiornaLista.emit( event );
  }
}