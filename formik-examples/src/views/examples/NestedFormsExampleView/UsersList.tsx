import React from 'react';
import { User } from './types';
const IconEdit = require('react-feather/dist/icons/edit').default;
const IconTrash = require('react-feather/dist/icons/trash').default;

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
          <IconEdit
            size={16}
            onClick={() => props.editUser(idx, user)}
            className="m-2 ml-auto"
            color="#999"
          />
          <IconTrash
            size={16}
            onClick={() => props.removeUser(idx)}
            className="m-2"
            color="#999"
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
