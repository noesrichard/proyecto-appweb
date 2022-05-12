import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { PanelComponent } from './components/panel/panel.component';
import { HomeComponent } from './components/home/home.component'; 
import { CardModule } from 'primeng/card';
import { PasswdInputComponent } from './components/passwd-input/passwd-input.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { TabViewModule } from 'primeng/tabview';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component'; 

@NgModule({
    declarations: [LoginPageComponent, MainPageComponent, NavbarComponent, PanelComponent, HomeComponent,  PasswdInputComponent, UserInputComponent, LoginFormComponent, SignupFormComponent, ],
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        TabMenuModule,
        OverlayPanelModule,
        MenuModule,
        CardModule,
        TabViewModule,
    ],
})
export class CoreModule {}
