import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name: string = 'Test';
  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', [Validators.required, this.sharedService.patternValidator()]],
      email: ['jk@gmail.com', [Validators.required, Validators.email]]
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onUpdate() {
    this.name = 'JK';
  }

}
