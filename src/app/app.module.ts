import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursorLightComponent } from './cursor-light/cursor-light.component';
import { HoverEffectComponent } from './hover-effect/hover-effect.component';
import { FloatingTabComponent } from './floating-tab/floating-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CursorLightComponent,
    HoverEffectComponent,
    FloatingTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
