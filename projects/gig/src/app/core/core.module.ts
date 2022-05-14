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
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { PasswdInputComponent } from './components/passwd-input/passwd-input.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
    declarations: [
        LoginPageComponent,
        MainPageComponent,
        NavbarComponent,
        PanelComponent,
        HomeComponent,
        SignupPageComponent,
        PasswdInputComponent,
        UserInputComponent,
        SignupComponent,
        LoginComponent,
        LogoComponent,
    ],
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        TabMenuModule,
        OverlayPanelModule,
        MenuModule,
        CardModule,
    ],
})
export class CoreModule {}
