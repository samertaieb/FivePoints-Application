import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SallesListComponent } from './salles-list/salles-list.component';
import { SalleComponent } from './salle/salle.component';
import { ErrorsComponentComponent } from './errors-component/errors-component.component';
import { Form2Component } from './form2/form2.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersComponentComponent } from './users-component/users-component.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoHttpComponent } from './todo-http/todo-http.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ParentComponent,
    ChildComponent,
    SallesListComponent,
    SalleComponent,
    ErrorsComponentComponent,
    Form2Component,
    TodoListComponent,
    UsersComponentComponent,
    TodoHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
