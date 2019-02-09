import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { RouterModule } from "@angular/router";

import { CounterDirective } from "./counter.directive";

import { StoreComponent } from "./store.component";
import { cartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";

@NgModule({
    imports: [
        ModelModule, 
        BrowserModule, 
        FormsModule,
        RouterModule
    ],
    declarations: [
        StoreComponent, 
        CounterDirective,
        cartSummaryComponent,
        CartDetailComponent,
        CheckoutComponent
    ],
    exports: [
        StoreComponent,
        CartDetailComponent,
        CheckoutComponent
    ]
})

export class StoreModule { }