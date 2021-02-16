import { UserServiceService } from './../user-service.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

 
  user: User = new User();
  submitted = false;

  constructor(private userService: UserServiceService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService
    .addUser(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
      this.gotoList();
    }, 
    error => console.log(error));
  }
    onSubmit() {
      this.submitted = true;
      this.save();    
    }
  
    gotoList() {
      this.router.navigate(['/users']);
    }
  }