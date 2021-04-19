import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Book } from '../user';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id:number;
user: Book=new Book();
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router:Router) { }
  ngOnInit():void {
    
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
   this.userService.getBookById(this.id)
  .subscribe((data: Book)=> {
      

    console.log(data);
      this.user =data;
    });
   
  }
  onSubmit(){  
   this.userService.updateBook(this.id,this.user).subscribe(data=>{
    console.log(data);
  });
  this.getBooks();
}
getBooks(){
  this.router.navigate(['/user']);
}
}
