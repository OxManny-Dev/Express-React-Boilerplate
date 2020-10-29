import React from 'react';

import { useUserListView } from '../UserHooks';


export const UserListView = () => {
  const { users } = useUserListView();
  return (
    <div>
      <ul>
        {
          users.map(user => {
            return <li key={user.id}>{ user.username}</li>
          })
        }
      </ul>
    </div>
  )
};
