import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { TableViewComponent } from './components/table-view/table-view.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [
    TableViewComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    CoreModule,
    SharedModule,
    TabViewModule,
  ]
})
export class ExpensesModule { }
