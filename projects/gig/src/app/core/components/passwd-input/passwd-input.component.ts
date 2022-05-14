import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'gig-passwd-input',
    templateUrl: './passwd-input.component.html',
    styleUrls: ['./passwd-input.component.css'],
})
export class PasswdInputComponent implements OnInit {
    weak = 'Fácil';
    medium = 'Media';
    strong = 'Difícil';
    icon = 'pi pi-eye';
    passwordPrompt = 'Ingrese una contraseña';
    showPassword = false;
    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit(): void {
        this.primengConfig.setTranslation({
            weak: 'Fácil',
            medium: 'Media',
            strong: 'Difícil',
        });
    }

    changeShowPassword() {
        this.showPassword = !this.showPassword;
        if (this.showPassword == true) {
            this.icon = 'pi pi-eye-slash';
        } else {
            this.icon = 'pi pi-eye';
        }
        
    }
}
