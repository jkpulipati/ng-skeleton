import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  subscribers = [];
  users: any = [];
  users$ = this.sharedService.getUsers();
  iShowPrimary = false;
  date = new Date();
  amount = 123123;
  name = 'Test alsdjf askdfj asdkflj asdlkf asdkfj asdfj kl ';
  employees = [
    {
      name: 'test',
      sal: 1200
    },
    {
      name: 'TU',
      sal: 2200
    }
  ];

  ngOnInit(): void {
    // this.getUsers();
    this.iShowPrimary = true;
    this.promiseCheck();
  }

  updateName() {
    this.name = 'JK';
    this.employees = [
      {
        name: 'test',
        sal: 4000
      },
      {
        name: 'TU',
        sal: 2200
      },
      {
        name: 'NY',
        sal: 2200
      }
    ];
  }

  getUsers() {
    const getUsersSubcription = this.sharedService.getUsers().subscribe( (response) => {
      console.log('from successs', response);
      this.users = response;
    }, (error) => {
      console.log('from error', error);
    });
    this.subscribers.push(getUsersSubcription);
  }

  promiseCheck() {
    const promise = new Promise( (resolve, reject) => {
      console.log('from promise check method');
      resolve('success');
      this.iShowPrimary = true;
    });

    promise.then( (res) => {
      console.log(res);
    })
  }

  ngOnDestroy() {
    this.subscribers.forEach( (sub: Subscription) => sub.unsubscribe());
  }

}
