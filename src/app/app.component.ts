import {Component} from '@angular/core';
import {select} from "@angular-redux/store";
import {Actions} from "./actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @select('login') public login;
  public actions: Actions;

  constructor(actions: Actions) {
    this.actions = actions;
    console.log(this.login);
  }

}
