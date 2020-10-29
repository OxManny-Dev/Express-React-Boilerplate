import {useEffect} from 'react';
import axios from 'axios';
import { setUsers } from './UserReducer';
import { useSelector, useDispatch } from 'react-redux';

export const useUserListView = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.user);
  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        dispatch(setUsers(res.data));
      })
  }, [dispatch]);


  return {
    users,
  };
};
