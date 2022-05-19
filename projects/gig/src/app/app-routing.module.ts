import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { SignupPageComponent } from './core/pages/signup-page/signup-page.component';

const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'accounts',
        loadChildren: () =>
            import('./accounts/accounts.module').then((m) => m.AccountsModule),
    },
    {
        path: 'categories',
        loadChildren: () =>
            import('./categories/categories.module').then(
                (m) => m.CategoriesModule
            ),
    },
    {
        path: 'expenses',
        loadChildren: () =>
            import('./expenses/expenses.module').then((m) => m.ExpensesModule),
    },
    {
        path: 'income',
        loadChildren: () =>
            import('./income/income.module').then((m) => m.IncomeModule),
    },
    {
        path: 'wishlist',
        loadChildren: () =>
            import('./wishlist/wishlist.module').then((m) => m.WishlistModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
