import React from 'react';
import { Icon } from '../../../components/Icon';
import { User } from './types';

interface Props {
  data: User[];
  editUser(index: number, initialValues: User): void;
  removeUser(index: number): void;
}

export const UsersList: React.FC<Props> = props => {
  return (
    <React.Fragment>
      {props.data.map((user, idx) => (
        <div key={idx} className="flex items-center rounded shadow-lg m-4 p-4">
          <img src={getAvatarUrl(user)} width="32" className="mr-4" />
          <div>
            {user.firstName} {user.lastName}
          </div>
          <Icon
            name="Edit"
            size={16}
            className="m-1 p-2 ml-auto"
            rounded
            onClick={() => props.editUser(idx, user)}
          />
          <Icon
            name="Trash"
            size={16}
            rounded
            className="m-1 p-2"
            onClick={() => props.removeUser(idx)}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

function getAvatarUrl(user: User): string {
  return `https://ui-avatars.com/api/?rounded=true&name=${user.firstName} ${
    user.lastName
  }&background=999&color=fff`;
}
