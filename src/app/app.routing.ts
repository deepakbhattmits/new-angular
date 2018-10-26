import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { EditComponent } from './edit/index';

import { DashBoardComponent } from './dashboard/index';
import { ShopComponent } from './shop/index';
import { SearchComponent } from './search/index';
import { ContactusComponent } from './contactus/index';
import { AboutusComponent } from './aboutus/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'edit/:id', component:EditComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashBoardComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'search', component: SearchComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'aboutus', component: AboutusComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
