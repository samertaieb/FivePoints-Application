import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/models/Utilisateur';
import { CalculServiceService } from '../calcul-service.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {
  listUsers:Utilisateur[]
  affiche: boolean;
  verifier;
  constructor(private calculService:CalculServiceService) { }

  ngOnInit(): void {
    this.listUsers=[
      {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net"}
      ]
      
  }
  verification(un){
    this.verifier=this.calculService.getNumberOf(this.listUsers,"username",un.value)
    // console.log(un.value)
    this.affiche=true;


  }

}
