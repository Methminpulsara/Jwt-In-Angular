import { Routes } from '@angular/router';
import { DhashboardComponent } from './page/dhashboard/dhashboard.component';
import { AddEmployeeComponent } from './page/dhashboard/add-employee/add-employee.component';
import { ManageComponent } from './page/dhashboard/manage/manage.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DhashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: AddEmployeeComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: 'manage', component: ManageComponent }
    ]
  }
];
