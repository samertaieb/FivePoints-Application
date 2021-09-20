import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHttpComponent } from './todo-http.component';

describe('TodoHttpComponent', () => {
  let component: TodoHttpComponent;
  let fixture: ComponentFixture<TodoHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
