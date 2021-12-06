import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { appState } from 'src/app/store/app.store';
import { getCounter } from '../state/counter.selector';
import { counterState } from '../state/counter.state';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy{
  // @Input()
  // Counter!: number; 
  constructor(private store: Store<appState>) { }
  CounterSubScription!: Subscription;
  counter!: number;
  ngOnInit(): void {
    this.CounterSubScription = this.store.select(getCounter).subscribe(data => {
      this.counter = data;
      console.log('counter value calling')
    });
  }
  ngOnDestroy(): void {
    if (this.CounterSubScription)
      this.CounterSubScription.unsubscribe();
  }
}
