import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SongComponent }  from './Songs/song.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SongComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
