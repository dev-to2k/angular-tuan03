import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bt01Component } from './tuan03/bt01/bt01.component';
import { CarouselComponent } from './tuan03/carousel/carousel.component';
import { CardComponent } from './tuan03/card/card.component';
import { Bt02Component } from './tuan03/bt02/bt02.component';
import { Bt03Component } from './tuan03/bt03/bt03.component';
import { Bt04Component } from './tuan03/bt04/bt04.component';

@NgModule({
  declarations: [
    AppComponent,
    Bt01Component,
    CarouselComponent,
    CardComponent,
    Bt02Component,
    Bt03Component,
    Bt04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
