import { Component } from '@angular/core';
import {APIService} from './MockServer/RestAPI/API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNgRX';
  constructor(private server:APIService){}

}
