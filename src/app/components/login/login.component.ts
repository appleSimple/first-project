import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userId: FormControl;
  userPw: FormControl;

  constructor(
  ) {
    
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      userPw: new FormControl('', Validators.required)
    })
  }

  

  onSubmit(): void {
    console.log(this.loginForm.value.id);
  }
  
  
}
