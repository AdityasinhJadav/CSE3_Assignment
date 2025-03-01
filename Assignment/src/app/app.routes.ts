import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"logout",
        component:LoginComponent
    },
    {
        path: 'search',
        component:SearchComponent
    }
];
