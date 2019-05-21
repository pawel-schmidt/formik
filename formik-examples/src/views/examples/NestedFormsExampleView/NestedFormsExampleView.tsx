import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import { Modal } from '../../../components/Modal';
import { BLANK_USER, USERS } from './constants';
import './NestedFormsExampleView.css';
import { User } from './types';
import { UserForm } from './UserForm';
import { UsersList } from './UsersList';

export const NestedFormsExampleView: React.FC = () => {
  const [recordUnderEdit, setRecordUnderEdit] = React.useState(-1);
  const [formValues, setFormValues] = React.useState<undefined | User>(
    undefined
  );
  const showForm = (index: number, values: User) => {
    setFormValues(values);
    setRecordUnderEdit(index);
  };
  const hideForm = () => {
    setRecordUnderEdit(-1);
    setFormValues(undefined);
  };
  const handleSubmit = () => {
    // alert('sss');
  };
  return (
    <Formik initialValues={{ users: USERS }} onSubmit={handleSubmit}>
      <Form className="example__nested-forms px-4">
        <FieldArray name="users">
          {arrayHelpers => (
            <React.Fragment>
              <UsersList
                data={arrayHelpers.form.values[arrayHelpers.name]}
                editUser={showForm}
                removeUser={arrayHelpers.remove}
              />
              {formValues && (
                <Modal>
                  <UserForm
                    initialValues={formValues}
                    onSubmit={values => {
                      hideForm();
                      if (recordUnderEdit > -1) {
                        arrayHelpers.replace(recordUnderEdit, values);
                      } else {
                        arrayHelpers.push(values);
                      }
                    }}
                    onDiscard={hideForm}
                  />
                </Modal>
              )}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={() => showForm(-1, BLANK_USER)}
              >
                Add user
              </button>
            </React.Fragment>
          )}
        </FieldArray>
      </Form>
    </Formik>
  );
};
