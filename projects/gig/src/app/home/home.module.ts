import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeRoutingModule } from './home-routing.module';
import { BalanceViewComponent } from './components/balance-view/balance-view.component';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    declarations: [BalanceViewComponent, HomePageComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ChartModule,
        CardModule,

        RouterModule,
        AppRoutingModule,
        SharedModule,

    ],
    exports: [
        AppRoutingModule
    ]
})
export class HomeModule {}
