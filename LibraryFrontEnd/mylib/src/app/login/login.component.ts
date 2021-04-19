import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { publishFacade } from '@angular/compiler';
import { Book } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Book=new Book();
  constructor(private userService: UserService,private router: Router) { }
saveBook(){
  
  this.userService.postData(this.user).subscribe(data =>{
    console.log(data);
  });
  this.getBooks();
}
getBooks(){
  this.router.navigate(['/user']);
}
  ngOnInit(): void {
     };
  }


