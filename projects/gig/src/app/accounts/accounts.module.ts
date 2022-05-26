import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { TableViewComponent } from './components/table-view/table-view.component';
import { SharedModule } from '../shared/shared.module';
import { TabViewModule } from 'primeng/tabview';
import { NewAccountFormComponent } from './components/new-account-form/new-account-form.component';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
    declarations: [TableViewComponent, NewAccountFormComponent],
    imports: [
        CommonModule,
        AccountsRoutingModule,
        SharedModule,
        TabViewModule,
        DialogModule,
        InputTextModule
    ],
    exports: [AccountsRoutingModule, TableViewComponent],
})
export class AccountsModule {}
