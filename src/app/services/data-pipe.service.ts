import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Users } from '../models/Users.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataPipeService {
  private users: BehaviorSubject<Users[]> = new BehaviorSubject([]);

  constructor() { }

  setUsers(data: Users[]): void {
    this.users.next(data);
  }
  
  getUsers(): Observable<Users[]> {
    return this.users.asObservable();
  }
}
