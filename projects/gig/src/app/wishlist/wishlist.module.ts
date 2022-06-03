import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { MainComponent } from './views/main/main.component';
import { FormComponent } from './components/form/form.component';
import { WishtableComponent } from './components/wishtable/wishtable.component';

import { SharedModule } from '../shared/shared.module';
import { BuyingFormComponent } from './components/buying-form/buying-form.component';

@NgModule({
    declarations: [
        MainComponent,
        FormComponent,
        WishtableComponent,
        BuyingFormComponent,
    ],
    imports: [CommonModule, WishlistRoutingModule, SharedModule, TabViewModule],
})
export class WishlistModule {}
