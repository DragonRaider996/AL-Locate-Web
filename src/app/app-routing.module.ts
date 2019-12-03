import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helper/auth.guard';
import { BannerComponent } from './banner/banner.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { TrackTransferComponent } from './track-transfer/track-transfer.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'home', component: BannerComponent },
      { path: 'transfer', component: TransferHistoryComponent },
      { path: 'track', component: TrackTransferComponent },
      { path: 'stats', component: StatsComponent },
    ]
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
