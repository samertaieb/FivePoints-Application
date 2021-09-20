import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserServiceUserServiceService } from '../user-service-user-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  idUser;
  todos:[]=[]
  constructor(private route :ActivatedRoute, private userservive :UserServiceUserServiceService ) { }

  ngOnInit(): void {
    this.idUser=this.route.snapshot.paramMap.get('id');
    this.userservive.getTodosId(this.idUser).subscribe(result=>{this.todos=JSON.parse(JSON.stringify(result))},
    error=>{console.log("serveur ma yjawebch" )},
    ()=>{console.log("chnouwa t7eb a5er");
    }
    )

  }

}
