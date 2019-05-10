import { combineReducers } from 'redux';

import repositories from './repositories';
import categories from './categories';
import messages from './messages';
import logins from './logins';

export default combineReducers({
  repositories,
  categories,
  messages,
  logins
});
