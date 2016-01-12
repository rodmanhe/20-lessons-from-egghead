//These first 3 lines will be deprecated by the final release
import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

import {TodoInput} from "../src/components/todo-input";

@Component({
  selector: `app`,
  directives: [TodoInput],
  template: `<div>
    hello world
    <todo-input></todo-input>
  </div>`
})

class App{}

bootstrap(App);
