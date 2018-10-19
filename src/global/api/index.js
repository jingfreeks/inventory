import config from './config';


export const fetchApi=(endPoints,payLoads={},methodParams='POST',headers={})=>{
    let bodyParms='';  

    //console.log('payloadsssss',payLoads);
    if(methodParams.toUpperCase()==='GET'){
        console.log('configggggssss123',config.url + endPoints);
        return fetch(config.url + endPoints,{
            method:methodParams,
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + payLoads.accesstoken
            }
        })
        .catch((error)=>{
            console.error(error);
            if (error.response && error.response.json) {
                error.response.json().then((json) => {
                    if (json) throw json;
                    throw error;
                });
            } else {
                throw error;
            }
        });
    }else{

        return fetch(config.url + endPoints,{
            method:methodParams,
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(payLoads),
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            return responseJson;
        })
        .catch((error)=>{
            if (error.response && error.response.json()) {
                error.response.json().then((json) => {
                    if (json) throw json;
                    throw error;
                });
            } else {
                throw error;
            }
        });
    }

}