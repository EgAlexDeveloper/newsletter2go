import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../../../models/User.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input('user') user: User;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  calculateAge(): number {
    let currentDate: number = new Date().getFullYear();
    let userAge: number = new Date(this.user.dateOfBirth).getFullYear();

    return currentDate - userAge;
  }

  ngOnInit() {}

}
