import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TabViewModule } from 'primeng/tabview';
import { MainComponent } from './views/main/main.component';
import { FormComponent } from './components/form/form.component';
import {ConfirmationService, MessageService} from "primeng/api";

@NgModule({
    declarations: [ MainComponent, FormComponent],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        SharedModule,
        TabViewModule,
    ],
  providers: [
    MessageService, ConfirmationService
  ]

})
export class CategoriesModule {}
