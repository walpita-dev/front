import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {}

  onSubmit(value) {
    this.authService.login(value.login, value.password).subscribe(() => {
      this.router.navigate(['data/home']);
    });
  }

}
