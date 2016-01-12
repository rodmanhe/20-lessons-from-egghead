import {Component} from "angular2/core";

@Component({
  selector: 'todo-input',
  template: `<div>
  <input type="text" #myInput>
  <button (click)="onClick(myInput.value)" >Click this button</button>
  </div>`
})

export class TodoInput{
  onClick(value) {
    console.log("I have been clicked with value " + value);
  }
}
