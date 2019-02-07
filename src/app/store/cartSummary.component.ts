/*  
    Components are the essential building blocks for Angular applications 
    because they allow discrete units of code and content to be easily created.
*/

import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component ({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html"
})
export class cartSummaryComponent {
    /*
        When Angular needs to create an instance of this component, 
        it will have to provide a Cart object as a constructor argument, 
        using the service that I configured in the previous section by adding 
        the Cart class to the feature module’s providers property
    */
    constructor(public cart: Cart) { }
}