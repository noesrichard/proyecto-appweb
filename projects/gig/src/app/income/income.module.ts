import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { TableViewComponent } from './components/table-view/table-view.component';
import {SharedModule} from '../shared/shared.module';
import {TabViewModule} from 'primeng/tabview';



@NgModule({
  declarations: [
    TableViewComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule, 
    SharedModule,
    TabViewModule,
  ]
})
export class IncomeModule { }
