import {fetchApi} from '../../../../global/api';
import * as endPoints from '../../../../global/endpoints/endpoints';


export let getData=payload=>fetchApi(endPoints.setups.type.getData(payload),payload,'get');