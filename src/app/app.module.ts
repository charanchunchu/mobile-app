import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PomeranianComponent } from './pomeranian/pomeranian.component';
import { ChowchowComponent } from './chowchow/chowchow.component';
import { AlaskanComponent } from './alaskan/alaskan.component';

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    PomeranianComponent,
    ChowchowComponent,
    AlaskanComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
