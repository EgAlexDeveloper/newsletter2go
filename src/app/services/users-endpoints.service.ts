import { Injectable } from '@angular/core';
import { QueryService } from './query.service';
import { Observable } from 'rxjs/internal/Observable';

import { Users } from '../models/Users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersEndpointsService {

  constructor(private query: QueryService) { }

  /**
   * @name fetch
   * @memberof UsersEndpointsService
   * @description a method to get all users Json and map it with Users model
   * @param 
   * @return Observable {array of Users}
   */
  fetch(): Observable<Users[]> {
    this.query.setUri(`users.json`);
    return this.query.get();
  }
}
