import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursorLightComponent } from './cursor-light/cursor-light.component';
import { HoverEffectComponent } from './hover-effect/hover-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    CursorLightComponent,
    HoverEffectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
