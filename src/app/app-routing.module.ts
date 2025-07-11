import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { WasherDashboardComponent } from './Washer/washer-dashboard/washer-dashboard.component';

import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { AuthGuardService } from './authGuard/auth-guard.service';

import { AddUserOrderComponent } from './User/add-user-order/add-user-order.component';
import { MyOrdersComponent } from './User/my-orders/my-orders.component';
import { UnassignedWasherViewComponent } from './Washer/unassigned-washer-view/unassigned-washer-view.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { ViewCarsComponent } from './cars/view-car/view-car.component';
import { PastOrdersComponent } from './User/past-orders/past-orders.component';
import { MywasherOrdersComponent } from './Washer/mywasher-orders/mywasher-orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'admin',
  //   component: AdminDashboardComponent,
  //   canActivate: [AuthGuardService],
  //   data: { roles: ['ADMIN'] },
  //   children: [
  //     {
  //       path: 'completed',
  //       component: CompletedOrdersComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //     {
  //       path: 'pending',
  //       component: PendingOrdersComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //     {
  //       path: 'unassigned',
  //       component: UnassignedOrdersComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //     {
  //       path: 'cancelled',
  //       component: CancelledOrdersComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //     {
  //       path: 'allOrders',
  //       component: AllOrdersComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //     {
  //       path: 'addOrder',
  //       component: AddOrderComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //     {
  //       path: 'updateOrder/:id',
  //       component: UpdateOrderComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //     {
  //       path: 'updateWP/:id',
  //       component:UpdateWashpackComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //     {
  //       path: 'users',
  //       component: GetallUsersComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //     {
  //       path: 'washers',
  //       component: GetallWashersComponent,
  //       canActivate: [AuthGuardService],
  //     },
  //   ],
  // },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [AuthGuardService],
    data: { roles: ['CUSTOMER'] },
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'add/car', component: AddCarComponent },
      { path: 'view/cars', component: ViewCarsComponent },
      { path: 'addOrder', component: AddUserOrderComponent },
      { path: 'myorders', component: MyOrdersComponent },
      {
        path: 'past-orders',
        component: PastOrdersComponent
      }
      
     
      
    ],
  },
  
  {
    path: 'washer',
    component: WasherDashboardComponent,
    canActivate: [AuthGuardService],
    data: { roles: ['WASHER'] },
    children: [
      {
        path:'notAssigned',
        component: UnassignedWasherViewComponent,
        canActivate:[AuthGuardService],
      },
      {
        path:"past",
        component:MywasherOrdersComponent,
        canActivate:[AuthGuardService]
      }
      
    ],
  },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'badcred', component: NotAuthComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      console.log(error);
      this.router.navigate(['/404']);
    };
  }
}
export const routingComponents = [
  UserDashboardComponent,
  WasherDashboardComponent,
  AboutusComponent,
  PageNotFoundComponent,
];
