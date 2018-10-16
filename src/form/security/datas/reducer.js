import {combineReducers} from 'redux';
import { reducer as loginReducer } from './login/reducers';
import { reducer as userAccountReducer } from './useraccounts/reducers';

export const reducer = combineReducers({
    login:loginReducer,
    //useraccount:userAccountReducer,
});