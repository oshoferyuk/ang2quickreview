import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { NumbersComponent } from './numbers/numbers.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StarsDirective } from './directives/stars.directive';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    NumbersComponent,
    HighlightDirective,
    StarsDirective,
    HomeComponent,
    HelpComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
	routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
