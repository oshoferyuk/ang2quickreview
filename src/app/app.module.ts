import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import  { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { NumbersComponent } from './numbers/numbers.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StarsDirective } from './directives/stars.directive';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { RegisterComponent } from './register/register.component';



//AIzaSyCLiKOWUb7uQkftDDoU8cigrgHybcAWr6g

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    NumbersComponent,
    HighlightDirective,
    StarsDirective,
    HomeComponent,
    HelpComponent,
    UsersComponent,
    UserComponent,
    UserEditComponent,
    UserDetailComponent,
	CalendarComponent,
	RegisterComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLiKOWUb7uQkftDDoU8cigrgHybcAWr6g'
    }),
	routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
