import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})

export class Detail implements OnChanges{

  public title: String;
  public result: Object;
  @Output() appendArtist: EventEmitter<String> = new EventEmitter<String>();
  @Input() nomeartista: String;

  constructor( private http: HttpClient ) {
    this.title = "name" ;
    this.result = [];
  }

  ngOnChanges(e){
    //console.log(e);
    if(!e.nomeartista.firstChange){
      let artistName = e.nomeartista.currentValue;
      this.title = artistName;
      this.showEvent(artistName);
    }
  }

  showEvent(artista): void {
    //console.log(artista);
    let call = 'https://rest.bandsintown.com/artists/'+artista+'/events?app_id=test_app';
    
    this.http.get( call ).subscribe( ( responsejson ) => {
      if ( responsejson ){
        //console.log(responsejson);
        this.result = responsejson;
        this.appendArtist.emit( artista );
      }
    }, ( error ) => {
      console.log( "non funzia" );
    });
  }

  

}