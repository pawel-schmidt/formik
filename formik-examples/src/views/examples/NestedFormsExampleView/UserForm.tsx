import React from 'react';
import { Formik, Form, Field } from 'formik';
import { User } from './types';

interface Props {
  initialValues: User;
  onSubmit(values: User): void;
}

export const UserForm: React.FC<Props> = props => {
  return (
    <div
      style={{
        position: 'fixed',
        background: 'rgba(0,0,0,.15)',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Formik initialValues={props.initialValues} onSubmit={props.onSubmit}>
        <Form className="p-8 m-16 rounded shadow-lg bg-white">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First name
            </label>
            <Field
              name="firstName"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last name
            </label>
            <Field
              name="lastName"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last name"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
};
