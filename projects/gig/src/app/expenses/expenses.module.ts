import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import {SharedModule} from '../shared/shared.module';
import {TabViewModule} from 'primeng/tabview';
import { FormComponent } from './components/form/form.component';
import { MainComponent } from './views/main/main.component';


@NgModule({
  declarations: [
    FormComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    SharedModule,
    TabViewModule,
  ]
})
export class ExpensesModule { }
