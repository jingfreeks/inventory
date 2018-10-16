import {fetchApi} from '../../../../global/api';
import * as endPoints from '../../../../global/endpoints/endpoints';


export let fetchLogin=payload=>fetchApi(endPoints.security.login.get(),payload,'post');