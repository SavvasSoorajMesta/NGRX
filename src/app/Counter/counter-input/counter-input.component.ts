import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  customIncrement, increment } from '../state/counter.action';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  val!: string;
  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
  }

  add(){

     this.store.dispatch(customIncrement({value: +this.val})) 
     this.val = '';
  }
 
}
