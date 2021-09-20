import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salle } from 'src/models/salle';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  idS;
  salles:Salle[]=[]
  salle : Salle;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.idS=this.route.snapshot.paramMap.get('idSalle');
    this.salles=JSON.parse(localStorage.getItem('salles'))
    this.salle=this.salles.find(x=>x.id==this.idS);
   }

}
