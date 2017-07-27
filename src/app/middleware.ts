import {LOGIN, LOGIN_SUCCESS} from './actions';


export const Mdl = store => next => action => {
  if (action.type === LOGIN) {
    console.log('Middleware Login');
    setTimeout(() => {
      next({type: LOGIN_SUCCESS });
    }, 3000);
    return next(action);
  }
  console.log('Middleware Default')
  return next(action);
};
