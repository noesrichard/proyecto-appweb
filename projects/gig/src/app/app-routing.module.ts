import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { routes as homeRoutes } from './home/home-routing.module';
import { SignupPageComponent } from './auth/pages/signup-page/signup-page.component';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: '', component: HomePageComponent, children: homeRoutes },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
