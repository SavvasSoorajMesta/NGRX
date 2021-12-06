import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { APIService } from 'src/app/MockServer/RestAPI/API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Server:APIService, private auth:AuthService) { }

  ngOnInit(): void {

    this.Server.mockServer();
    this.auth.getASingleUser().subscribe(data => console.log(data))
  }

  callpostApi(){
    // this.auth.PostASingleUser().subscribe(data => console.log(data))
  }

}
