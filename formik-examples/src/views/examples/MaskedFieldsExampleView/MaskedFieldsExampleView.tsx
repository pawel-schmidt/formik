import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import { INITIAL_VALUES } from './constants';
import { formatCCNumber, serializeCCNumber } from './formatters';
import './MaskedFieldsExampleView.css';
import { Values } from './types';

export const MaskedFieldsExampleView: React.FC = props => (
  <Formik initialValues={INITIAL_VALUES} onSubmit={() => alert('s')}>
    <Form className="example__masked-fields">
      <Field name="creditCard">
        {({ field }: FieldProps<Values>) => (
          <input
            {...field}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Credit card"
            autoFocus
            value={formatCCNumber(field.value)}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(field.name)(
                serializeCCNumber(evt.target.value, field.value)
              );
            }}
          />
        )}
      </Field>
    </Form>
  </Formik>
);
