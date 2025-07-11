import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';


import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { WasherDashboardComponent } from './Washer/washer-dashboard/washer-dashboard.component';

import { AngularMaterialModule } from './angularMaterial/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { UserSidebarComponent } from './User/user-sidebar/user-sidebar.component';
import { WasherSidebarComponent } from './Washer/washer-sidebar/washer-sidebar.component';

import { AddUserOrderComponent } from './User/add-user-order/add-user-order.component';

import { MyOrdersComponent } from './User/my-orders/my-orders.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MywasherOrdersComponent } from './Washer/mywasher-orders/mywasher-orders.component';

import { UnassignedWasherViewComponent } from './Washer/unassigned-washer-view/unassigned-washer-view.component';


import { AddCarComponent } from './cars/add-car/add-car.component';
import { ViewCarsComponent } from './cars/view-car/view-car.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PastOrdersComponent } from './User/past-orders/past-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    AboutusComponent,
    NavbarComponent,
    

    UserDashboardComponent,
    WasherDashboardComponent,
 
  
    HomeComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    NotAuthComponent,
    UserSidebarComponent,
    WasherSidebarComponent,
   
    AddUserOrderComponent,
    
    MyOrdersComponent,
    MyProfileComponent,
    MywasherOrdersComponent,
    
    UnassignedWasherViewComponent,
    
    AddCarComponent,
    ViewCarsComponent,
    PastOrdersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
