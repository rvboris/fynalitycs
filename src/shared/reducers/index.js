import Immutable from 'seamless-immutable';
import { reducer as formReducer } from 'redux-form';

export { default as auth } from './auth';
export { default as locale } from './locale';

export function form(state = Immutable({}), action) {
  return Immutable(formReducer(state, action));
}