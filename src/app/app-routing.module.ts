import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { user1 } from 'src/models/user1';
import { ErrorsComponentComponent } from './errors-component/errors-component.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { ParentComponent } from './parent/parent.component';
import { SalleComponent } from './salle/salle.component';
import { SallesListComponent } from './salles-list/salles-list.component';
import { TodoHttpComponent } from './todo-http/todo-http.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserServiceComponent } from './user-service/user-service.component';
import { User1Component } from './user1/user1.component';
import { UsersComponentComponent } from './users-component/users-component.component';

const routes: Routes = [
  // {path:'',component:FormComponent },
  {path:'form',component:FormComponent },
  {path:'parent',component:ParentComponent},
  // {path:'**',component:ParentComponent },
  {path:'salles',component:SallesListComponent },
  {path:'salle/:idSalle',component:SalleComponent },
  {path:'userService',component:Form2Component },
  {path:'',component:SallesListComponent },
  {path:'todo',component:TodoListComponent },
  {path:'users',component:UsersComponentComponent },
  {path:'todoHttp',component:TodoHttpComponent },
  {path:'USHttp',component:UserServiceComponent },
  {path:'usertodo/:id',component:User1Component },


  

  {path:'**',component: ErrorsComponentComponent},

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
