import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BalanceViewComponent} from './components/balance-view/balance-view.component';

const routes: Routes = [
    {path: '', component: BalanceViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
