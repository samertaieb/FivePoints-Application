import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/models/salle';
import { User } from 'src/models/user';

@Component({
  selector: 'app-salles-list',
  templateUrl: './salles-list.component.html',
  styleUrls: ['./salles-list.component.css']
})
export class SallesListComponent implements OnInit {
  salles:Salle[] = [

    {id:1,nom:'éléctro mecanique', capacite:30},
    
    {id:2,nom:'Genie civile', capacite:50},
    
    {id:3,nom:'IOT', capacite:100},
    
    {id:4,nom:'Informatique mecanique', capacite:10},
    
    {id:5,nom:'BI', capacite:50},
    
    ]
     
   
  constructor() {

   }

  ngOnInit(): void {
    this.stockageToLocalStorage()
  }
  stockageToLocalStorage(){
    localStorage.setItem('salles',JSON.stringify(this.salles));
 }

 
 
}