import React from 'react';
import { FieldArray } from 'formik';
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
        <div key={idx} className="flex rounded shadow-lg m-4 p-4">
          <div>
            {user.firstName} {user.lastName}
            <div onClick={() => props.editUser(idx, user)}>Edit</div>
            <div onClick={() => props.removeUser(idx)}>Remove</div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
