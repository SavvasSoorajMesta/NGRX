import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  counter: number = 0;
  incrment(){
    this.counter++;
  }
  Decrment(){
    this.counter--;
  }
  reset(){
    this.counter = 0;
  }
}
