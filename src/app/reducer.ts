import {LOGIN, LOGIN_SUCCESS} from './actions';

export function LoginReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN: {
      console.log('Reducer Login')
      return {isPending: true}
    }

    case LOGIN_SUCCESS: {
      console.log('Reducer Login Success')
      return {isPending: false}
    }

    default: {
      return state;
    }
  }

}
