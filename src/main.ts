//These first 3 lines will be deprecated by the final release
import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
  selector: `app`,
  template: `<div>hello world</div>`
})

class App{}

bootstrap(App);
