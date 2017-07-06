import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { UsersComponent } from './users/users.component';

const APP_ROUTES:Routes = [
	{path:'', component: HomeComponent },
	{path:'help', component: HelpComponent },
	{path:'users', component: UsersComponent },
	{path:'users/:id', component: UsersComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);