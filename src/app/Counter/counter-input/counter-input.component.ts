import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeAuthorName, customIncrement, increment } from '../state/counter.action';
import { getAuthorname } from '../state/counter.selector';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  val!: number;
  authorName!: string;
  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
      this.store.select(getAuthorname).subscribe(data => {
        this.authorName = data;
        console.log('authorname: calling')
      })
  }

  add(){
     this.store.dispatch(customIncrement({value: +this.val})) 
  }
  cngauthor(){
    this.store.dispatch(changeAuthorName());
  }
}
