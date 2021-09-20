import { Component, OnInit, } from '@angular/core';
import{FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
}) 
export class FormComponent implements OnInit {
  
  userForm:FormGroup;
 
  constructor( private form :FormBuilder) { }
myForm:FormGroup
  ngOnInit(): void {
    this.userForm=this.form.group({ 
      skills : this.form.array([
        new FormControl(""),
 
      ]),
      nom :new FormControl('',[Validators.required,Validators.minLength(10)]),
      email:new FormControl('',[Validators.required,Validators.email]),
         payment:new FormGroup({
      typeCarte:new FormControl('',[Validators.required]),
      NumeroCarte:new FormControl('',[Validators.required,Validators.pattern('^[0-9]+')]),
      dateExpiration:new FormControl('',[Validators.required,Validators.pattern('^[0-9]+ ')]),
      code:new FormControl('',[Validators.required,Validators.pattern('^[0-9]+')])
     }),
    

    // items :this.form.array([
    //   this.form.group([
    //     itemSkills:['angular,react'],
    //     itemHobbies:['sports']
    //   ])

    // ])
    })
  }

  ajouter(){
    console.log    (this.userForm);

  }
  get skills():FormArray{
    return this.userForm.get('skills') as FormArray
  }

}
