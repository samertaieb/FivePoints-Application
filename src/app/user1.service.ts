import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User1Service {

  constructor(private user1:HttpClient) { }
  
}
