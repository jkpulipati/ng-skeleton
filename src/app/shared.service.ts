import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { CanActivate } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements CanActivate {

  url = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  firstName = new Subject<string>();

  canActivate() {
    // logic
    return false;
  }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      // const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      // const valid = regex.test(control.value);
      const arr = control.value.split('@');
      const valid = arr[1] === 'gmail.com';
      return valid ? null : { invalidPassword: true };
    };
  }

  getUsers() {
    return this.http.get(`${this.url}posts`);
  }

  addUser() {
    const input = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    return this.http.post(`${this.url}posts`, input);
  }

  updateUser() {
    const input = {
      title: 'fooasdf',
      body: 'barasd',
      userId: 1,
    };
    return this.http.put(`${this.url}posts`, input);
  }
}
