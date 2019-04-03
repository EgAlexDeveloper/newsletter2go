import { Component, OnInit } from '@angular/core';
import { UsersEndpointsService } from '../../services/users-endpoints.service';
import { DataPipeService } from '../../services/data-pipe.service';
import { Users } from '../../models/Users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: Users[];

  constructor(
    private endPoint: UsersEndpointsService,
    private dataPipe: DataPipeService
  ) { }

  /**
   * @name getUsers
   * @memberof UsersComponent
   * @description a method to get all users Json and map it with Users model
   * @param 
   * @return {void}
   */
  getUsers(): void {
    this.endPoint.fetch().subscribe(res => {
      this.users = res;
      this.dataPipe.setUsers(res);
    });
  }

  ngOnInit() {
    this.dataPipe.getUsers().subscribe(res => {
      if (res && res.length > 0) {
        this.users = res;
      } else {
        this.getUsers();
      }
    })
  }

}
