import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  userPassword: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUserNameUpdate(event) {
    console.log(event);
    if(event.length === 5) {
      // logic
      
    }
    
  }

  onNavigate() {
    // logic
    this.router.navigate(['/dashboard']);
  }

}
