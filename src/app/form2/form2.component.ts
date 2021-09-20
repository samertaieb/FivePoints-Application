import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  list:User[]=[];
  user:User
  constructor(private userservice:UserServiceService) { }

  ngOnInit(): void {
  }
ajouter(fn,ln,ag){
  var obj={
    firstName:fn,
    lastName:ln,
    age:ag

  }
this.userservice.addTolist(this.list,obj)
console.log(this.list);

}
}
