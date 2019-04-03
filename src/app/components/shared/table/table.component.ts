import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../../models/Users.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('data') data: Users[];

  constructor() { }

  ngOnInit() { }

}
