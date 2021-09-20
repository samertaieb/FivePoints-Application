import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { User } from 'src/models/user';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnChanges {
  @Input('data') user:User
  userForm:FormGroup;
  btnName="Ajouter"
  @Output() eventUpdate = new  EventEmitter()
  constructor(private Formbuilder:FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void { 
    console.log(changes)
    if(!changes.user.currentValue){
      this.userForm=this.Formbuilder.group({
        firstName :new FormControl(''),
        lastName: new FormControl(''),
        age : new FormControl(''),
        
      }
      )
      
      
      }
    else{
      this.btnName="Modifier"
      this.userForm= this.Formbuilder.group({
        firstName:new FormControl(this.user.firstName),
        lastName : new FormControl(this.user.lastName),
        age :new FormControl(this.user.age)
      })
    }
  }

  ngOnInit(): void {

  }
 sendeventparent(){
  //  var obj={
  //    firstName:this.userForm.controls.firstName.value,
  //    lastName:this.userForm.controls.lastName.value,
  //   age:this.userForm.controls.age.value  }
    this.eventUpdate.emit({form: this.userForm.value, action : this.btnName})
 }
 
}
