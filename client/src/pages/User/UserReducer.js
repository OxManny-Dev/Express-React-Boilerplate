import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedUser: 'something else',
  users: []
};

// This will create action creators, set our initialState, and create our reducer at the same time
const userSlice = createSlice({
  //this name will be prepended to our action creators type
  name: 'user',
  initialState,
  // The job of this is to create an action creator and a reducer at the same time
  reducers: {
    //It will take the name of this reducer
    // and append it to the name that we set for the slice
    // and that will create our action creators action type
    // user/setUsers
    // setUsers will become an action creator that takes 1 parameter
    // And whatever that parameter will be action.payload
    setUsers: (state, action) => {
      return {...state, users: action.payload};
    },
  },
});

export const {
  setUsers,
} = userSlice.actions;


export const userReducer = userSlice.reducer;
