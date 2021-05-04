import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Employee } from '../app.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit, OnDestroy {

  @Input() firstName: string;
  @Input() title: string;
  @Input() employees: Array<Employee>;
  @Output() greet = new EventEmitter();

  isShow = false;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    console.log(this.employees, this.greet);
    // get the data from db
  }

  onUpdate() {
    // trigger a method which resides in app component.
    this.greet.emit(this.isShow);


    // pass information to person component
    this.sharedService.firstName.next('JK');
  }

  ngOnDestroy() {
    console.log('from on destroy');
  }

}
