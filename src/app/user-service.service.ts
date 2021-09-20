import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  
  public addTolist(list:User[],user:User) {
    list.push(user)
    
  }
}
