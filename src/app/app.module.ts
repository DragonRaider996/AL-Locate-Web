import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RequestErrorInterceptor } from './helper/error.interceptor';
import { RequestInterceptor } from './helper/request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule,
  MatToolbarModule, MatIconModule, MatSnackBarModule, MatProgressSpinnerModule,
  MatGridListModule, MatRippleModule, MatDialogModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CreateTransferComponent } from './create-transfer/create-transfer.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { TrackTransferComponent } from './track-transfer/track-transfer.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    CreateTransferComponent,
    TransferHistoryComponent,
    TrackTransferComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatRippleModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreateTransferComponent]
})
export class AppModule { }
