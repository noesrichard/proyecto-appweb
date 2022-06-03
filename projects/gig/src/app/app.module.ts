import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesModule } from './categories/categories.module';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomeModule } from './income/income.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        BrowserAnimationsModule,
        HomeModule,
        AccountsModule,
        AuthModule,
        CategoriesModule,
        ExpensesModule,
        IncomeModule,
        WishlistModule,

        SharedModule,
        HomeRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [AppRoutingModule],
})
export class AppModule {}
