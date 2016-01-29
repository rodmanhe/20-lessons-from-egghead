//These first 3 lines will be deprecated by the final release
import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

import {TodoInput} from "../src/components/todo-input";
import {TodoList} from "../src/components/todo-list";
import {TodoService} from "../src/services/todo-service";

@Component({
  selector: `app`,
  directives: [TodoInput, TodoList],
  template: `<div>
    hello world
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>`
})

class App{}

bootstrap(App, [TodoService]);
