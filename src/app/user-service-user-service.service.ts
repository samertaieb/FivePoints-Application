import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceUserServiceService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  getTodosId(id){
    return this.http.get("https://jsonplaceholder.typicode.com/todos?userId="+id)
  }
}
