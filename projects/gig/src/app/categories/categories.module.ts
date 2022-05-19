import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { TableViewComponent } from './components/table-view/table-view.component';
import {SharedModule} from '../shared/shared.module';
import {TabViewModule} from 'primeng/tabview';
import {CoreModule} from '../core/core.module';




@NgModule({
  declarations: [
    TableViewComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    TabViewModule,
    CoreModule
  ]
})
export class CategoriesModule { }
