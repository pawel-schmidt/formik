import React from 'react';
import { Formik, Form, Field } from 'formik';
import { User } from './types';

interface Props {
  initialValues: User;
  onSubmit(values: User): void;
  onDiscard?(): void;
}

export const UserForm: React.FC<Props> = props => (
  <Formik initialValues={props.initialValues} onSubmit={props.onSubmit}>
    <Form className="p-8 m-16 rounded shadow-lg bg-white">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm  mb-2">First name</label>
        <Field
          name="firstName"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="First name"
          autoFocus
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm  mb-2">Last name</label>
        <Field
          name="lastName"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Last name"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
      >
        Save
      </button>
      {props.onDiscard && (
        <button
          type="button"
          className="mx-4 py-2 px-4 bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 rounded"
          onClick={props.onDiscard}
        >
          Discard
        </button>
      )}
    </Form>
  </Formik>
);
