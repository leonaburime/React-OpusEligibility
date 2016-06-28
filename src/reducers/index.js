/**
 * Created by opusteamuser on 6/27/2016.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';


const rootReducer = combineReducers({
  courses
});


export default rootReducer;
