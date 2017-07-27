import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from './state';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

@Injectable()
export class Actions {

  constructor(private store: NgRedux<AppState>) {

  }

  login() {
    console.log('Action Login');
    this.store.dispatch({
      type: LOGIN,
    });
  }

}
