import * as api from './apis';
import * as actionTypes from './types';
import {constants} from '../../../../component/constant';


export const reset = payload=>({
    type:actionTypes.RESET,
    payload:payload
});


export const update = payload=>({
    type:actionTypes.UPDATE,
    payload:payload
});

export const status = payload=> ({
    type:actionTypes.STATUS,
    payload
});

export const init = payload => ({
	type: actionTypes.INITIALIZE,
	payload
});


export const get = payload=>
    dispatch =>{
        let objResponse={};
        dispatch(status(constants.status.LOADING));
        dispatch(reset())

        api.getData(payload)
        .then((response)=>response.json())
        .then((res)=>{
            dispatch(init(res.data))
        })
        .then((exception)=>{
            dispatch(status([
                0, exception
            ]));
            //console.log('exception: ' + exception.message);
        })
    };

