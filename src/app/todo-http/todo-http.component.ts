import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-http',
  templateUrl: './todo-http.component.html',
  styleUrls: ['./todo-http.component.css']
})
export class TodoHttpComponent implements OnInit {
  todos :[]=[]
  constructor(private todoService : TodoServiceService) { }

  ngOnInit(): void {
    // subscribe => 3 paramètres (result,error,())
  this.todoService.getTodos().subscribe(result=>{this.todos=JSON.parse(JSON.stringify(result))
  },
    error=>{
     alert('serveur ne répond pas')
    },
    ()=>{
      console.log("hani kamalt");
    })
}

}
 