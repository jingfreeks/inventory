import {combineReducers} from 'redux';
//import {reducers as reportReducers} from '../form/report/datas/reducers';
import {reducer as setupReducers} from '../form/setups/datas/reducer';
import {reducer as securityReducers} from '../form/security/datas/reducer';


const rootReducers=combineReducers({
    security:securityReducers,
    setups:setupReducers,
    //transactions:transactReducers
})

export default rootReducers;