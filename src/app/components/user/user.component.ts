import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DataPipeService } from 'src/app/services/data-pipe.service';
import { UsersEndpointsService } from '../../services/users-endpoints.service';

import { User } from '../../models/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required])
  });

  private uid: number;
  private users: User[] = [];
  private currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private endPoint: UsersEndpointsService,
    private dataPipe: DataPipeService,
    private router: Router
  ) {
    this.uid = route.params['value'].uid;
    dataPipe.getUsers().subscribe(res => {
      if (res && res.length > 0) {
        this.users = res;
        this.getCurrentUser(this.uid);
      } else {
        this.getUsers();
      }
    })
  }

  getUsers(): void {
    this.endPoint.fetch().subscribe(res => {
      this.users = res;
      this.dataPipe.setUsers(this.users);
    });
  }

  getCurrentUser(uid: number): void {
    console.log(this.users);
    // this.currentUser = this.users.filter(user => user.id == uid);

    for (let key in this.currentUser[0]) {
      if (this.userForm.get(key)) this.userForm.get(key).setValue(this.currentUser[0][key]);
    }

  }

  submit(form): void {
    if (form.valid) {
      this.currentUser = form.value;

      this.users.filter((user, index) => {
        if (user.id == this.uid) {
          this.users[index] = this.currentUser;
        }
      });

      this.dataPipe.setUsers(this.users);
      this.navigateTo('/');
    }
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  ngOnInit() { }

}
