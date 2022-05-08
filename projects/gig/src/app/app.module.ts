import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccountsModule} from './accounts/accounts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoriesModule} from './categories/categories.module';
import { CoreModule } from './core/core.module';
import {ExpensesModule} from './expenses/expenses.module';
import {IncomeModule} from './income/income.module';
import {WishlistModule} from './wishlist/wishlist.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AccountsModule,
    CategoriesModule,
    ExpensesModule,
    IncomeModule,
    WishlistModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
