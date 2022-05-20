import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { TableViewComponent } from './components/table-view/table-view.component';
import { SharedModule } from '../shared/shared.module';
import { TabViewModule } from 'primeng/tabview'; 

@NgModule({
    declarations: [TableViewComponent],
    imports: [CommonModule, AccountsRoutingModule, SharedModule,  TabViewModule],
    exports: [AccountsRoutingModule, TableViewComponent],
})
export class AccountsModule {}
