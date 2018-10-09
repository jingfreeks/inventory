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
            //oState.resultLists = oHelper.arrayMerge(oState.resultLists, action.payload, 'notimeinid');
            return action.payload;
            break;
        default:
            return state;     
    }
};


const status =(state = initstatus, action)=>{
    switch (action.type){
        case actionTypes.STATUS:
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