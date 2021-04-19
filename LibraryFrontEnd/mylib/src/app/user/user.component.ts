import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Book } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 users:Book[];
 id:number;
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: Book[])=> {
      console.log(data);
      this.users =data;
    });
  }
  update(id:number){
this.router.navigate(['updatebook',id]);
      };
      delete(id:number){
        console.log(id);
        this.userService.deleteBook(id).subscribe(data=>{
          console.log(data);
          });
          this.ngOnInit();
              };
              refresh(){
                this.ngOnInit();
              }
            }


