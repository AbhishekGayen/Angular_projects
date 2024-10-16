import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResultsComponent} from "./results/results.component";
import {DashboardComponent} from "./dasboard/dashboard.component";
import {LoginFormComponent} from "./login/login-form.component";
import {RegistrationFormComponent} from "./registration/registration-form.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'dashboard/:id', component: DashboardComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path:'**', redirectTo: '/home'}
];
