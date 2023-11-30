import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { AboutComponent } from './ui/about/about.component';
import { ProductsComponent } from './ui/products/products.component';
import { ContactComponent } from './ui/contact/contact.component';
import { Error404Component } from './ui/error404/error404.component';
import { HomeComponent } from './ui/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: Error404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
