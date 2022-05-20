import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableViewComponent as account} from '../accounts/components/table-view/table-view.component';
import { TableViewComponent as expenses } from '../expenses/components/table-view/table-view.component';
import { TableViewComponent as wishlist } from '../wishlist/components/table-view/table-view.component';
import { TableViewComponent as income } from '../income/components/table-view/table-view.component';
import { TableViewComponent as categories } from '../categories/components/table-view/table-view.component';
import {BalanceViewComponent} from './components/balance-view/balance-view.component';

export const routes: Routes = [
    { path: '', component: BalanceViewComponent },
    { path: 'balance', component: BalanceViewComponent },
    { path: 'accounts', component: account },
    { path: 'categories', component: categories },
    { path: 'expenses', component: expenses },
    { path: 'income', component: income },
    { path: 'wishlist', component: wishlist },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
