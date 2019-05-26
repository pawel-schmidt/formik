import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import { NOTIFICATIONS } from './contants';
import { Notification } from './types';
import { PreBlock } from '../../../components/PreBlock';

export const RadioBoxesExampleView: React.FC = () => {
  const noop = () => {};
  return (
    <Formik initialValues={{ notifications: [] }} onSubmit={noop}>
      <Form>
        <h1 className="text-xl">Notification emails</h1>
        <p className="mb-8 text-gray-600">
          Notification emails that you would like to receive from us.
        </p>

        <Field name="notifications">
          {({ field }: FieldProps<string[]>) => (
            <React.Fragment>
              <div className="mb-8 text text-gray-600">
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() =>
                    field.onChange(field.name)(
                      NOTIFICATIONS.map(notif => notif.value)
                    )
                  }
                >
                  All
                </span>{' '}
                |{' '}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => field.onChange(field.name)([])}
                >
                  None
                </span>
              </div>
              {NOTIFICATIONS.map(notif => (
                <label className="flex text-gray-500 mb-8" key={notif.value}>
                  <input
                    name={field.name}
                    type="checkbox"
                    checked={field.value.includes(notif.value)}
                    onChange={() => {
                      const set = new Set(field.value);
                      if (set.has(notif.value)) {
                        set.delete(notif.value);
                      } else {
                        set.add(notif.value);
                      }
                      field.onChange(field.name)(Array.from(set));
                    }}
                  />
                  <div className="text-sm ml-2 -mt-1">
                    <span className="block font-bold text-black">
                      {notif.title}
                    </span>
                    <span className="text-gray-600">{notif.subtitle}</span>
                  </div>
                </label>
              ))}
            </React.Fragment>
          )}
        </Field>
        <Field>
          {({ field }: FieldProps<any>) => (
            <PreBlock title="Stored Formik values">
              {JSON.stringify(field.value, null, 2)}
            </PreBlock>
          )}
        </Field>
      </Form>
    </Formik>
  );
};
