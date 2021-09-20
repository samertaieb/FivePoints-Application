import { Component, OnInit } from '@angular/core';
import { UserServiceUserServiceService } from '../user-service-user-service.service';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {
  users:[]=[]
  test=[1,2,4]
  constructor(private userService:UserServiceUserServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(result=>{this.users=JSON.parse(JSON.stringify(result))},
    error=>{alert("le serveur ne repond pas");
    },
    ()=>{console.log("cht7eb a5er");
    }
    )
  }

}
