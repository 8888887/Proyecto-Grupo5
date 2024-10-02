import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './seguridad/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { AboutComponent } from './pages/about/about.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { ReservarComponent } from './pages/reservar/reservar.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: 'login', component: LoginComponent},
    {path: 'search', component: SearchComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'reservar', component: ReservarComponent},
    {path: 'reservar/:id_cancha', component: ReservarComponent},
];
