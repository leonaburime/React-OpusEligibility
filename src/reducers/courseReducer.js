/**
 * Created by opusteamuser on 6/27/2016.
 */
import * as types from '../actions/actionTypes';


export default function courseReducer(state = [], action){
  switch (action.type){
    case types.LOAD_COURSES_SUCCESS:
          return action.courses;
    default:
          return state;
  }
}
