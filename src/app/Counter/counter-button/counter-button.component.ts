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
  // @Output() onin = new EventEmitter<void>();
  // @Output() onDn = new EventEmitter<void>();
  // @Output() onreset = new EventEmitter<void>();
  ngOnInit(): void {
  }
  increment(){

    this.store.dispatch(increment());
    // this.onin.emit();
  }
  decrement(){
    // this.onDn.emit();
    this.store.dispatch(decrement());
  }
  reset(){
    // this.onreset.emit();
    this.store.dispatch(reset());
  }

}
