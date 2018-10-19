import {fetchApi} from '../../../../global/api';
import * as endPoints from '../../../../global/endpoints/endpoints';


export let get=payload=>fetchApi(endPoints.setups.category.get(payload),payload,'get');