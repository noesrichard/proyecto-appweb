//Imports de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Imports locales de components
import { TableComponent } from './components/table/table.component';
import { ContainerComponent } from './components/container/container.component';
import { TabComponent } from './components/tab/tab.component';
import { TabpanelComponent } from './components/tabpanel/tabpanel.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserBubbleComponent } from './components/user-bubble/user-bubble.component';

//Imports de PrimeNG
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DropdownOptionInputComponent } from './components/dropdown-option-input/dropdown-option-input.component';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ContainerComponent,
        LogoComponent,
        NavbarComponent,
        StatCardComponent,
        TabComponent,
        TableComponent,
        TabpanelComponent,
        UserBubbleComponent,
        TextInputComponent,
        DropdownOptionInputComponent,
        CreateDialogComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,

        TabMenuModule,
        MenuModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        FileUploadModule,
        ToolbarModule,
        RatingModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        InputTextareaModule,
        TabViewModule,
        ReactiveFormsModule,
    ],
    exports: [
        ContainerComponent,
        LogoComponent,
        NavbarComponent,
        StatCardComponent,
        TabComponent,
        TableComponent,
        TabpanelComponent,
        UserBubbleComponent,
        TextInputComponent,
        DropdownOptionInputComponent,
        CreateDialogComponent,

        FormsModule,

        TabMenuModule,
        MenuModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        FileUploadModule,
        ToolbarModule,
        RatingModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        InputTextareaModule,
        TabViewModule,
        ReactiveFormsModule,
    ],
    providers: [MessageService, ConfirmationService],
})
export class SharedModule {}
