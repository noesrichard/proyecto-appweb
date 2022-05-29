import { Injectable } from '@angular/core';
import { Wish } from './wish';

@Injectable({
    providedIn: 'root',
})
export class WishlistService {
    constructor() {}

    getWishList(): Wish[] {
        return [new Wish( 'Camiseta Nike', 'Ropa', 30)];
    }
}
