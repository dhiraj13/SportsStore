//It's Called Feature Module which allow the data model functionality
//to be easily used elsewhere in the application.
import { NgModule } from "@angular/core";

import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [ProductRepository, StaticDataSource]
})

export class ModelModule {}