import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountsPageComponent} from './accounts/pages/accounts-page/accounts-page.component';
import {CategoriesPageComponent} from './categories/pages/categories-page/categories-page.component';
import {LoginPageComponent} from './core/pages/login-page/login-page.component';
import {MainPageComponent} from './core/pages/main-page/main-page.component';
import {SignupPageComponent} from './core/pages/signup-page/signup-page.component';
import {ExpensesPageComponent} from './expenses/pages/expenses-page/expenses-page.component';
import {IncomePageComponent} from './income/pages/income-page/income-page.component';
import {WishlistPageComponent} from './wishlist/pages/wishlist-page/wishlist-page.component';

const routes: Routes = [
    {path: '', component: LoginPageComponent},
    {path: 'signup', component: SignupPageComponent},
    {path: 'home', component: MainPageComponent},
    {path: 'accounts', component: AccountsPageComponent},
    {path: 'categories', component: CategoriesPageComponent},
    {path: 'expenses', component: ExpensesPageComponent},
    {path: 'income', component: IncomePageComponent},
    {path: 'wishlist', component: WishlistPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
