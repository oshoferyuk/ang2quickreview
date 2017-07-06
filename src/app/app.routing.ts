import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

const APP_ROUTES:Routes = [
	{path:'', component: HomeComponent },
	{path:'help', component: HelpComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);