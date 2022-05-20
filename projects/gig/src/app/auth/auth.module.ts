import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    declarations: [
        LoginFormComponent,
        SignupFormComponent,
        LoginPageComponent,
        SignupPageComponent,
    ],
    imports: [CommonModule, SharedModule, ButtonModule, RouterModule, InputTextModule],
})
export class AuthModule {}
