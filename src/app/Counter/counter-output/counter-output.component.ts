import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { appState } from 'src/app/store/app.store';
import { counterState } from '../state/counter.state';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy{
  // @Input()
  // Counter!: number; 
  constructor(private store: Store<{counter: counterState}>) { }
  // CounterSubScription!: Subscription;
  counter!: number;

  ngOnInit(): void {

     this.store.select('counter').subscribe(data => {
      this.counter = data.counter;
      console.log('counter value calling')
    });
  }
  ngOnDestroy(): void {
  //   if (this.CounterSubScription)
  //     this.CounterSubScription.unsubscribe();
  }
}
