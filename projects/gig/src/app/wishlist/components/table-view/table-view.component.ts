import { Component, OnInit } from '@angular/core';
import { Column } from '../../../services/shared/column';
import {Wish, tableHeaders} from '../../../services/wishlist/wish';
import {WishlistService} from '../../../services/wishlist/wishlist.service';

@Component({
  selector: 'gig-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

    data: Wish[];

    columns: Column[];     


    constructor(private wishlistService: WishlistService) {
        this.data = wishlistService.getWishList();
        this.columns = tableHeaders; 
    }

    ngOnInit(): void {}
}
