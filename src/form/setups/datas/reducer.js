import {combineReducers} from 'redux';
import { reducer as categoryReducer } from './category/reducers';
import { reducer as productReducer } from './product/reducers';
import { reducer as invtypeReducer } from './type/reducers';

export const reducer = combineReducers({
    category:categoryReducer,
    product:productReducer,
    invtype:invtypeReducer,
});