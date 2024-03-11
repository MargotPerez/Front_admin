import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(mc => mc.CategoriesModule)
  }
  ,
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(mp => mp.ProductsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(mu => mu.UsersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mo => mo.OrdersModule)
  }
 /* {
    path : '', component : LoginComponent
  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
