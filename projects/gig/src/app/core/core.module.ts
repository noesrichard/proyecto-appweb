import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { PasswdInputComponent } from './components/passwd-input/passwd-input.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LogoComponent } from './components/logo/logo.component';
import { PanelComponent } from './components/panel/panel.component';
import { SidebarModule } from 'primeng/sidebar';
import { UserBubbleComponent } from './components/user-bubble/user-bubble.component'; 
import {TieredMenuModule} from 'primeng/tieredmenu';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
    declarations: [
        LoginPageComponent,
        NavbarComponent,
        HomeComponent,
        SignupPageComponent,
        PasswdInputComponent,
        UserInputComponent,
        SignupComponent,
        LoginComponent,
        LogoComponent,
        PanelComponent,
        UserBubbleComponent,
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
        SidebarModule,
        TieredMenuModule,
    ],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule {}
