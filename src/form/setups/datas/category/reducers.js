import * as actionTypes from './types';
import { combineReducers } from 'redux';
import { constants } from '../../../../component/constant';

const initstate='';
const initstatus =constants.status.LOADING;

export const data = (state=initstate, action )=>{
    switch(action.type){
        case actionTypes.INITIALIZE:
            return action.payload;
            break;
        case actionTypes.UPDATE:
            return action.payload;
            break;
        default:
            return state;     
    }
};


const status =(state = initstatus, action)=>{
    switch (action.type){
        case actionTypes.status:
            return action.payload;
            break;
        default:
            return state;
    }
}

export const reducer = combineReducers({
    data:data,
    status:status
});