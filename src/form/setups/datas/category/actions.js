import * as api from './apis';
import * as actionTypes from './types';
import {constants} from '../../../../component/constant';


export const reset = payload=>({
    type:actionTypes.reset,
    payload:payload
});


export const update = payload=>({
    type:actionTypes.update,
    payload:payload
});

export const status =payload=>({
    type:actionTypes.status,
    payload:payload
})


export const get = payload=>
    dispatch =>{
        let objResponse={};
        dispatch(status(constants.status.LOADING))
        dispatch(reset({type:null,payload:null}))
        
    }

