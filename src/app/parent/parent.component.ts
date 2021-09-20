import { Component, OnInit } from '@angular/core';


import { User, } from 'src/models/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  user:User;
  users : User[]=[]
  UpdatedIndex
  
  constructor() { }

  ngOnInit(): void {
    this.users.push({firstName:"samer",lastName:"taieb",age:27 },{firstName:"fahmi",lastName:"ghanmi",age:25 })

  }
  passinformationToChild(u,i){
    this.user=u
    this.UpdatedIndex=i
  }
  modifAdd(e){

    
    if(e.action=="Ajouter"){
      this.users.push(e.form)
    }else if(e.action=="Modifier"){
      console.log(this.UpdatedIndex);
      
     this.users.splice(this.UpdatedIndex,1,e.form)
    }
    
   
  }

}
