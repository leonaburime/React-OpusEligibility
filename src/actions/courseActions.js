/**
 * Created by opusteamuser on 6/27/2016.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';





export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses()
      .then(courses =>{
        dispatch(loadCoursesSuccess(courses));
      }).catch(err => {
        throw(err);
      });
  };
}


export function loadCoursesSuccess(courses){
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}
