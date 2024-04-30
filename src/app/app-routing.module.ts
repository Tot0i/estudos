import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Users', component: UsersComponent},
  {path: 'Products', component: ProductsComponent},
  {path: 'Orders', component: OrdersComponent},
  {path: 'Settings', component: SettingsComponent},
  {path: 'Logout', component: LoginComponent},
  {path: 'Cliente', component:ClienteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
