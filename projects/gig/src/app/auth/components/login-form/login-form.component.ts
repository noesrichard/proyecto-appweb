import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../services/auth/user';

@Component({
    selector: 'gig-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
    user: User = new User('', '');

    constructor(private authService: AuthService, private router: Router) {}

    checkData() {
        if (this.user.username == '' || this.user.password == '') {
            return false;
        }
        return true;
    }

    ngOnInit(): void {}

    signin() {
        if (this.checkData()) {
            //[routerLink]="'/'"
            this.authService.findUser(this.user).subscribe((user) => {
                console.log(user);
                if (user) {
                    sessionStorage.setItem('username', user.username);
                    sessionStorage.setItem('userid', user._id);
                    this.router.navigate(['/'])
                }
            });
        }
    }

    setUsername(username: string) {
        this.user.username = username;
    }

    setPassword(password: string) {
        this.user.password = password;
    }
}
