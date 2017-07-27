import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import {Actions} from './actions';
import {LoginReducer} from './reducer';
import {combineReducers} from 'redux';
import {Mdl} from './middleware';
import {logger} from 'redux-logger';

const rootReducer = combineReducers({
  login: LoginReducer
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [Actions],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(rootReducer, {}, [Mdl, logger]);
  }


}
