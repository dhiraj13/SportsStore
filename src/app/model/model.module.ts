/*
    It's Called Feature Module which allow the data model functionality
    to be easily used elsewhere in the application.
*/
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ProductRepository } from "./product.repository";
import {OrderRepository } from "./order.repository";

import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

import { Cart } from "./cart.model";
import { Order } from "./order.model";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ProductRepository,
        Cart,
        Order,
        OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource }
    ]
})

export class ModelModule { }