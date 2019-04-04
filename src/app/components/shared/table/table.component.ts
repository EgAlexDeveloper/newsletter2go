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

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) { }

  /**
   * @name handlePagenation
   * @memberof TableComponent
   * @description handle pagenation anf table rendering
   * @param null
   * @returns {User[]} an array of 10 users
   */
  handlePagenation(): User[] {
    return this.data
      .map((user, i) => ({ id: i + 1, ...user }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

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

  /**
   * @name deleteUserRow
   * @memberof TableComponent
   * @description delete user row
   * @param {index} index of user in the users array in case integrate with live api we will use id not index
   * @param {id} in case integration with live api
   * @return {void}
   */
  deleteUserRow(index: number, id?: number): void {
    // update data pipe with new removed user
    this.removeUser.emit(index);
  }

  selectUser(event, user: User): void {
    console.log(event)
  }

  navigateTo(path: string, id?: number): void {
    this.router.navigate([path, id]);
  }

  ngOnInit() { }

}
