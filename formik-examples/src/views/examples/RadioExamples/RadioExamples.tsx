import { Field, FieldProps, Formik } from 'formik';
import React from 'react';
import { PreBlock } from '../../../components/PreBlock';
import { DRINKS } from './constants';

export const RadioExamples: React.FC = () => {
  const noop = () => {};
  const isChecked = (radioValue: string, storedValue: string) =>
    radioValue === storedValue;
  return (
    <Formik initialValues={{ favouriteDrink: '' }} onSubmit={noop}>
      <React.Fragment>
        <div className="shadow p-4 mb-8 rounded-lg p-10 flex flex-col items-start">
          <h1 className="text-xl font-bold">What is your favourite drink?</h1>
          {DRINKS.map((tier, index) => (
            <label key={index} className="my-2 mt-8 cursor-pointer">
              <Field name="favouriteDrink">
                {({ field }: FieldProps) => (
                  <input
                    {...field}
                    type="radio"
                    name={field.name}
                    checked={isChecked(tier.value, field.value)}
                    onChange={() => field.onChange(field.name)(tier.value)}
                  />
                )}
              </Field>
              <span className="pl-2">{tier.label}</span>
            </label>
          ))}
        </div>
        <Field>
          {({ field }: FieldProps<any>) => (
            <PreBlock title="Stored Formik values">
              {JSON.stringify(field.value, null, 2)}
            </PreBlock>
          )}
        </Field>
      </React.Fragment>
    </Formik>
  );
};
