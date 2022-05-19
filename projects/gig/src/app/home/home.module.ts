import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BalanceViewComponent } from './components/balance-view/balance-view.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [BalanceViewComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CoreModule,
        SharedModule,
        ChartModule,
        CardModule,
    ],
})
export class HomeModule {}
