import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  ShowDiagram: boolean = false;
  customName: string = "show";
  show(){
    this.ShowDiagram = !this.ShowDiagram;
    this.customName =  this.ShowDiagram ? 'hide': 'show';
  }
}
