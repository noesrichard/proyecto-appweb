import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MainComponent } from './views/main/main.component';
import { FormComponent } from './components/form/form.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';

@NgModule({
    declarations: [
        MainComponent,
        FormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AccountsRoutingModule,
        SharedModule,
        TabViewModule,
        DialogModule,
        InputTextModule,
        ToolbarModule,
        ButtonModule,
        ConfirmDialogModule,
        ToastModule,
    ],
    exports: [AccountsRoutingModule, ],
    providers: [MessageService, ConfirmationService]
})
export class AccountsModule {}
