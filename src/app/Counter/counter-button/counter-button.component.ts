import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
  }

  increment(){
      // trigger the increment action method 
    this.store.dispatch(increment());
    // this.onin.emit();
  }
  decrement(){
    // trigger the decrement action method 
    this.store.dispatch(decrement());
  }
  reset(){
    
    // trigger the reset action method 
    this.store.dispatch(reset());
  }

}
