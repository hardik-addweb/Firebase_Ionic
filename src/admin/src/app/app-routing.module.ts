import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './users/users.component';
import { RagisterFormComponent } from './users/ragisterform/ragisterform.component'
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {path: 'dashboard',component: DashboardComponent},
    {path:'users',component : UserComponent},
    {path:'users/ragisterform', component : RagisterFormComponent},
    {path:'users/edit', component : RagisterFormComponent},
    {path : 'login',component: LoginComponent},
    {path : 'contact',component: ContactComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}];
export const ComponentModule = [
  DashboardComponent,
  UserComponent,
  RagisterFormComponent,
  LoginComponent,
  ContactComponent
]
