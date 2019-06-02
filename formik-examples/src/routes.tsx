import { DependentFieldsExample } from './views/examples/DependentFieldsExample';
import { MaskedFieldsExample } from './views/examples/MaskedFieldsExample';
import { NestedFormsExample } from './views/examples/NestedFormsExample';
import { RadioBoxesExample } from './views/examples/RadioBoxesExample';

export const ROUTES = [
  {
    path: '/examples/nested-forms',
    title: 'Nested forms',
    component: NestedFormsExample,
  },
  {
    path: '/examples/masked-fields',
    title: 'Masked fields',
    component: MaskedFieldsExample,
  },
  {
    path: '/examples/dependent-fields',
    title: 'Dependent fields',
    component: DependentFieldsExample,
  },
  {
    path: '/examples/radio-boxes',
    title: 'Radio boxes',
    component: RadioBoxesExample,
  },
];
