import { Field, FieldProps, Form, Formik } from 'formik';
import React from 'react';
import { PreBlock } from '../../../components/PreBlock';
import { DATA, INITIAL_VALUES } from './constants';
import './DependentFieldsExample.css';
import { Values } from './types';

const BrandOptions: React.FC = () => (
  <React.Fragment>
    <option disabled value="">
      Please, select brand
    </option>
    {DATA.map(row => (
      <option key={row.brand} value={row.brand}>
        {row.brand}
      </option>
    ))}
  </React.Fragment>
);

const ModelOptions: React.FunctionComponent<{ brand: string }> = props => {
  const match = DATA.find(row => row.brand === props.brand);
  return (
    <React.Fragment>
      <option disabled value="">
        Please, select model
      </option>
      {match &&
        match.models.map(model => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
    </React.Fragment>
  );
};

export const DependentFieldsExample: React.FC = props => (
  <Formik initialValues={INITIAL_VALUES} onSubmit={() => alert('s')}>
    <Form className="example__dependent-fields">
      <Field name="brand">
        {({ field, form }: FieldProps<Values>) => (
          <select
            {...field}
            className="appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700"
            onChange={evt => {
              field.onChange(evt);
              form.setFieldValue('model', '', form.validateOnChange);
            }}
          >
            <BrandOptions />
          </select>
        )}
      </Field>
      <Field name="model">
        {({ field, form }: FieldProps<Values>) => (
          <select
            {...field}
            className="appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700"
            disabled={field.value.brand === ''}
          >
            <ModelOptions brand={form.values.brand} />
          </select>
        )}
      </Field>
      <Field>
        {({ field }: FieldProps<Values>) => (
          <PreBlock title="Stored Formik values">
            {JSON.stringify(field.value, null, 2)}
          </PreBlock>
        )}
      </Field>
    </Form>
  </Formik>
);
