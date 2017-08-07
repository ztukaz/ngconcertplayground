import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class List implements OnInit {

  public list: String[]; 
  public artisti: Object[];

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
        console.log( "merda" );
      });
    });
  }
  clickHandler( event ){
    let pippo = new Detail();
    pippo.setNome(event['nome']);
  }
}