import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../models/User.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataPipeService {
  private users: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor() { }

  setUsers(data: User[]): void {
    this.users.next(data);
  }
  
  getUsers(): Observable<User[]> {
    return this.users.asObservable();
  }
}
