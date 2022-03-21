import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Co-Op App';
  users: any;
  // news: any[] = [{sourceUrl: "foo", headline: "Detroit is ok", image: "link to image", ageOfPost: "3 days"}, {sourceUrl: "coo", headline: "Detroit is not ok", image: "link to images", ageOfPost: "2 days"} ];
  

  constructor(private accountService: AccountService) {}

  ngOnInit() {
   this.setCurrentUser();

  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'))
    this.accountService.setCurrentUser(user);
  }
}
