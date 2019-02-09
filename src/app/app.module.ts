import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreFirstGuard } from "./storeFirst.guard";

import { StoreModule } from "./store/store.module";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    /* 
        a) The RouterModule.forRoot method is passed a set of routes, each of which maps a URL to a component.
        b) When the routing feature is used, Angular looks for the router-outlet element, which defines the 
           location in which the component that corresponds to the current URL should be displayed.    
    */
    RouterModule.forRoot([
      {
        path: "store", component: StoreComponent, 
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent, 
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CheckoutComponent, 
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/store" }
    ])],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
