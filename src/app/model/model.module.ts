/*
    It's Called Feature Module which allow the data model functionality
    to be easily used elsewhere in the application.
*/
import { NgModule } from "@angular/core";

import { ProductRepository } from "./product.repository";
import {OrderRepository } from "./order.repository";

import { StaticDataSource } from "./static.datasource";

import { Cart } from "./cart.model";
import { Order } from "./order.model";

@NgModule({
    providers: [
        ProductRepository, 
        StaticDataSource,
        Cart,
        Order,
        OrderRepository
    ]
})

export class ModelModule { }