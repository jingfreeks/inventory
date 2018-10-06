import {combineReducers} from 'redux';
import {reducers as reportReducers} from '../form/report/datas/reducers';
import {reducers as setupReducers} from '../form/setups/datas/reducer';
import {reducers as transactReducers} from '../form/transaction/datas/reducers';


const rootReducers=combineReducers({
    reports:reportReducers,
    setups:setupReducers,
    transactions:transactReducers
})

export default rootReducers;