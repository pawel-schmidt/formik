import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import { PreBlock } from '../../../components/PreBlock';
import {
  formatCCNumber,
  formatDate,
  serializeCCNumber,
  serializeDate,
} from '../../../helpers/formatters';
import { INITIAL_VALUES } from './constants';
import './MaskedFieldsExample.css';
import { Values } from './types';

export const MaskedFieldsExample: React.FC = props => (
  <Formik initialValues={INITIAL_VALUES} onSubmit={() => alert('s')}>
    <Form className="example__masked-fields">
      <Field name="creditCardNumber">
        {({ field }: FieldProps<Values>) => (
          <input
            {...field}
            className="appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700"
            placeholder="Credit card number"
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
      <Field name="date">
        {({ field }: FieldProps<Values>) => (
          <input
            {...field}
            className="appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700"
            placeholder="Date"
            value={formatDate(field.value)}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              field.onChange(field.name)(serializeDate(evt.target.value));
            }}
          />
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
