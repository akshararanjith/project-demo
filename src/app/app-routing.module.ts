import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // Login component: http://localhost:4200/
  {
    path:'', component:LoginComponent
  },
  //RegisterComponent - http://localhost:4200/register
  {
    path:'register', component:RegisterComponent
  },
  //home
  {
    path:'home', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
