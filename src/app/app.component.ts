import { Component } from '@angular/core';

export interface Employee {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-skeleton';
  isShow: boolean = true;
  firstName: string = 'test';

  employees: Array<Employee> = [
    {name: 'JK'},
    {name: 'slkfj'},
    {name: 'Perform'},
    {name: 'Krishna'}
  ];


  greet(isShow: boolean): void {
    console.log('from greet', isShow);
  }

  onSave(): void {
    console.log('from onsave methosdfkjd');
  }

  onShow() {
    this.isShow = !this.isShow;
  }

  onUpdate() {
    this.firstName = 'Jaya';

    this.employees.push({name: 'new name'});
  }
}
