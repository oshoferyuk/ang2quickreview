import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { NumbersComponent } from './numbers/numbers.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StarsDirective } from './directives/stars.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    NumbersComponent,
    HighlightDirective,
    StarsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
