import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import { Portal } from '../../../components/Portal';
import { USERS } from './constants';
import { User } from './types';
import { UserForm } from './UserForm';
import { UsersList } from './UsersList';

export const NestedFormsExampleView: React.FC = () => {
  const [recordUnderEdit, setRecordUnderEdit] = React.useState(-1);
  const [formInitialValues, setFormInitialValues] = React.useState<
    undefined | User
  >(undefined);
  const handleSubmit = () => {
    alert('sss');
  };
  return (
    <Formik initialValues={{ users: USERS }} onSubmit={handleSubmit}>
      <Form>
        <FieldArray name="users">
          {arrayHelpers => (
            <React.Fragment>
              <UsersList
                data={arrayHelpers.form.values[arrayHelpers.name]}
                editUser={(index, values) => {
                  setFormInitialValues(values);
                  setRecordUnderEdit(index);
                }}
                removeUser={idx => arrayHelpers.remove(idx)}
              />
              <Portal>
                {formInitialValues && (
                  <UserForm
                    initialValues={formInitialValues}
                    onSubmit={values => {
                      setFormInitialValues(undefined);
                      arrayHelpers.replace(recordUnderEdit, values);
                    }}
                  />
                )}
              </Portal>
            </React.Fragment>
          )}
        </FieldArray>
      </Form>
    </Formik>
  );
};
