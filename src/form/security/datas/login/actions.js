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


export const fetchlogin = payload=>
    dispatch =>{
        let objResponse={};
        dispatch(status(constants.status.LOADING));
        dispatch(reset())

        console.log('payloadsss',payload);

        api.fetchLogin(payload)
        .then((response)=>response)
        .then((res)=>{
            dispatch(init(res.data))
            objResponse={...res}
        })
		.then(() => {
            console.log('logggggssssssss',objResponse)
			dispatch(status([
				objResponse.flagno || 0, 
				objResponse.message || CONSTANTS.ERROR.SERVER
			]));
        })
        .catch((exception) => {
			dispatch(status([
				0,
				exception.message + '.'
			]));
			console.log('exception: ' + exception.message);
		});
    };


export const emailChanged=payload =>({
    type:actionTypes.EMAIL,
    payload
});

export const passwordChanged=payload=>({
    type:actionTypes.PASSWORD,
    payload
});