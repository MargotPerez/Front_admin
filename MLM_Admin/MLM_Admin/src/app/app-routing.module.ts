import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './shared/auth.guard';
import { ShowProfileComponent } from './users/show-profile/show-profile.component';
//import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(mc => mc.CategoriesModule),
    canActivate : [authGuard]
  }
  ,
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(mp => mp.ProductsModule),
    canActivate : [authGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(mu => mu.UsersModule),
    canActivate : [authGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mo => mo.OrdersModule),
    canActivate : [authGuard]
  },

  {
    path : 'login', component : LoginComponent
  },

  {
    path : 'profile', component : ShowProfileComponent,
    canActivate : [authGuard]
  },

  {
    path : '', component : DashboardComponent,
    canActivate : [authGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
