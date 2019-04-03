import { Component, OnInit } from '@angular/core';
import { UsersEndpointsService } from '../../services/users-endpoints.service';
import { DataPipeService } from '../../services/data-pipe.service';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];

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
      this.updateUsersInMemory(res);
    });
  }

  /**
   * @name deleteUserRow
   * @memberof UsersComponent
   * @description delete user row
   * @param {index} index of user in the users array in case integrate with live api we will use id not index
   * @param {id} in case integration with live api
   * @return {void}
   */
  removeUser(index: number, id?: number): void {
    this.users.splice(index, 1);
    this.updateUsersInMemory(this.users);
  }

  /**
   * @name updateUsersInMemory
   * @memberof UsersComponent
   * @description update Users In Memory
   * @param {User[]} users
   * @return {void}
   */
  updateUsersInMemory(users: User[]): void {
    this.dataPipe.setUsers(users);
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
