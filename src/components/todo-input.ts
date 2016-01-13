import {Component} from "angular2/core";
import {TodoService} from "../services/todo-service";

@Component({
  selector: 'todo-input',
  template: `<div>
  <input type="text" #myInput>
  <button (click)="onClick(myInput.value)" >Click this button</button>
  </div>`
})

export class TodoInput{
  constructor(public todoService: TodoService) {}

  onClick(value) {
    this.todoService.todos.push(value);
    console.log(this.todoService.todos);
  }
}
