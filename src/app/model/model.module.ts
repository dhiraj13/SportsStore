/*
    It's Called Feature Module which allow the data model functionality
    to be easily used elsewhere in the application.
*/
import { NgModule } from "@angular/core";

import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";

@NgModule({
    providers: [
        ProductRepository, 
        StaticDataSource,
        Cart
    ]
})

export class ModelModule { }