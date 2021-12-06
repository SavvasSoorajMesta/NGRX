import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.store';
import { LoginStart } from '../state/auth.action';
import { authState } from '../state/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store<appState>) { }
  loginform!: FormGroup;
  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('******')

    })
  }
  onsubmit(){
    const loginData = {
      email: this.loginform.get('email')?.value,
      password: this.loginform.get('password')?.value
      
    }

    this.store.dispatch(LoginStart(loginData));

  }
}
