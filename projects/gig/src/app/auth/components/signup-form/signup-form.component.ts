import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../services/auth/user';

@Component({
    selector: 'gig-signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
    user: User = new User('', '');
    repeteadPassword: string = ""; 
    constructor(
        private authService: AuthService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {}

    checkData() {
        if (this.user.username == '' || this.user.password == '') {
            return false;
        }else if( this.user.password != this.repeteadPassword ){ 
            return false; 
        }
        return true;
    }

    setUsername(username: string) {
        this.user.username = username;
    }

    setPassword(password: string) {
        this.user.password = password;
    }

    save() {
        if (this.checkData()) {
            this.authService.create(this.user).subscribe();
            console.log("crear"); 
        }
    }
}
