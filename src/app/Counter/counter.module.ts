import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { StoreModule } from '@ngrx/store';
import { CounterReduce } from './state/counter.reducer';
import { RouterModule, Routes } from '@angular/router';

const route: Routes =[{
  path:'counter', component:CounterComponent
}]
@NgModule({
  declarations: [
CounterComponent,
CounterOutputComponent,
CounterButtonComponent,
CounterInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    FormsModule

  ]
})
export class CounterModule { }
