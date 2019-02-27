import { Component } from '@angular/core';
import {User} from './user';
import {DUMMY_DATA} from './data/dummy-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user1: User = {
    Username: "",
  FirstName: "",
  LastName: "",
  Email: "",
  Country: "",
  MobileNumber: "",
  Password:"",
  SecurityRole: "",
  };
  users = DUMMY_DATA;
}
