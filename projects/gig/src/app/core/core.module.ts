import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  declarations: [LoginPageComponent, MainPageComponent, NavbarComponent],
  imports: [CommonModule, ButtonModule, InputTextModule, PasswordModule, TabMenuModule, OverlayPanelModule]
})
export class CoreModule {}
