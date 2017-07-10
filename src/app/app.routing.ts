import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const APP_ROUTES:Routes = [
	{path:'', component: HomeComponent },
	{path:'help', component: HelpComponent },
	{path:'users', component: UsersComponent },
	{path:'users/:id', component: UsersComponent, children:[	
		{path:'edit', component: UserEditComponent },
		{path:'detail', component: UserDetailComponent }
	]},
	
]

export const routing = RouterModule.forRoot(APP_ROUTES);