import config from './config';


export const fetchApi=(endPoints,payLoads={},methodParams='POST',headers={})=>{
    let bodyParms='';  
    console.log('configggggssss123',config.url + endPoints);
    
    if(methodParams.toUpperCase()==='GET'){

        return fetch(config.url + endPoints)
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
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(bodyParms),
        })
        .then((response)=> response.json())
        .then((responseJson)=>{
            return responseJson;
        })
        .catch((error)=>{
            if (error.response && error.response.json) {
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