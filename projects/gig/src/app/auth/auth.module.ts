import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SharedModule } from '../shared/shared.module';
import {UserInputComponent} from './components/user-input/user-input.component';
import {PasswdInputComponent} from './components/passwd-input/passwd-input.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

@NgModule({
    declarations: [
        LoginFormComponent,
        SignupFormComponent,
        UserInputComponent,
        PasswdInputComponent,
        LoginPageComponent,
        SignupPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PasswordModule,
        ButtonModule,
        RouterModule,
        InputTextModule,
    ],
})
export class AuthModule {}
