import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// A reducers is to look at an action type, and update any state it's in charge of
// in case it cares about the action type.
// In case it doesn't care about the action type, it's just job is to return
// whatever state it currently holds


export default combineReducers({
  form: formReducer,
});
