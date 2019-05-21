import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import { Portal } from '../../../components/Portal';
import { USERS } from './constants';
import './NestedFormsExampleView.css';
import { User } from './types';
import { UserForm } from './UserForm';
import { UsersList } from './UsersList';

export const NestedFormsExampleView: React.FC = () => {
  const [recordUnderEdit, setRecordUnderEdit] = React.useState(-1);
  const [formInitialValues, setFormInitialValues] = React.useState<
    undefined | User
  >(undefined);
  const showForm = (index: number, values: User) => {
    setFormInitialValues(values);
    setRecordUnderEdit(index);
  };
  const hideForm = () => {
    setRecordUnderEdit(-1);
    setFormInitialValues(undefined);
  };
  const handleSubmit = () => {
    // alert('sss');
  };
  return (
    <Formik initialValues={{ users: USERS }} onSubmit={handleSubmit}>
      <Form className="example__nested-forms">
        <FieldArray name="users">
          {arrayHelpers => (
            <React.Fragment>
              <UsersList
                data={arrayHelpers.form.values[arrayHelpers.name]}
                editUser={showForm}
                removeUser={arrayHelpers.remove}
              />
              {formInitialValues && (
                <Portal>
                  <UserForm
                    initialValues={formInitialValues}
                    onSubmit={values => {
                      hideForm();
                      arrayHelpers.replace(recordUnderEdit, values);
                    }}
                    onDiscard={hideForm}
                  />
                </Portal>
              )}
            </React.Fragment>
          )}
        </FieldArray>
      </Form>
    </Formik>
  );
};
