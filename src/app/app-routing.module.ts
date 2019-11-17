import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helper/auth.guard';
import { BannerComponent } from './banner/banner.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: BannerComponent },
    ]
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
