import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../../../models/User.model';
import { environment } from '../../../../environments/environment';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('data') data: User[] | any;
  @Output() removeUser: EventEmitter<any> = new EventEmitter();
  page: number = environment.pagenation.page;
  pageSize: number = environment.pagenation.pageSize;
  row = {};
  selectedUsers: User[] = [];

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) { }

  /**
   * @name openUserModal
   * @memberof TableComponent
   * @description open user modal
   * @return {void}
   */
  openUserModal(user: User): void {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.user = user;
  }

  selectUser(event, user: User): void {
    if (!event.target.checked) {
      this.selectedUsers.filter((item, index) => {
        if (user.id == item.id) {
          this.selectedUsers.splice(index, 1);
        }
      })
    } else {
      this.selectedUsers.push(user);
    }
  }

  /**
   * @name deleteSelectedUsers
   * @memberof TableComponent
   * @description delete selected users
   * @param {selectd: User} selectd user
   * @return {void}
   */
  deleteSelectedUsers(selectd?: User): void {
    let filteredUsers: User[] = Object.assign([], this.data);

    if (selectd) this.selectedUsers.push(selectd);

    for (let i = 0; i < this.selectedUsers.length; i++) {
      for (let x = 0; x < this.data.length; x++) {
        if (this.data[x].id == this.selectedUsers[i].id) {
          filteredUsers[x] = null;
        }
      }
    }

    filteredUsers = filteredUsers.filter(function (el) {
      return el != null;
    });

    this.data = filteredUsers;
    this.selectedUsers = [];

    this.removeUser.emit(filteredUsers);
  }

  navigateTo(path: string, id?: number): void {
    this.router.navigate([path, id]);
  }

  ngOnInit() { }

}
