import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceViewComponent } from './components/balance-view/balance-view.component';

export const routes: Routes = [
    { path: '', component: BalanceViewComponent },
    { path: 'balance', component: BalanceViewComponent },
    {
        path: 'accounts',
        loadChildren: () =>
            import('../accounts/accounts.module').then((m) => m.AccountsModule),
    },
    {
        path: 'categories',
        loadChildren: () =>
            import('../categories/categories.module').then(
                (m) => m.CategoriesModule
            ),
    },
    {
        path: 'expenses',
        loadChildren: () =>
            import('../expenses/expenses.module').then((m) => m.ExpensesModule),
    },
    {
        path: 'income',
        loadChildren: () =>
            import('../income/income.module').then((m) => m.IncomeModule),
    },
    {
        path: 'wishlist',
        loadChildren: () =>
            import('../wishlist/wishlist.module').then((m) => m.WishlistModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
