import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './state/auth.effect';
import { StoreModule } from '@ngrx/store';
import { appstore } from '../store/app.store';
import { AuthReducer } from './state/auth.reducer';


const router: Routes = [
  {
    path:'',
    children:[
      {path:'', redirectTo:'authlogin'},
      {path:'authlogin', component: LoginComponent}
    ]
  }
];
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([AuthEffect]),
    StoreModule.forFeature('user', AuthReducer),
    RouterModule.forChild(router)
  ],
  providers: [AuthService]
})
export class AuthModule { }
