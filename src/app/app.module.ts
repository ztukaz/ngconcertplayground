import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Detail } from './detail/detail.component';
import { List } from './list/list.component';
import { Search } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    List,
    Detail,
    Search
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
