import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RequestErrorInterceptor } from './helper/error.interceptor';
import { RequestInterceptor } from './helper/request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule,
  MatToolbarModule, MatIconModule, MatSnackBarModule, MatProgressSpinnerModule,
  MatGridListModule, MatRippleModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    MatRippleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
