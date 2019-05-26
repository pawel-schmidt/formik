import { MaskedFieldsExampleView } from './views/examples/MaskedFieldsExampleView';
import { NestedFormsExampleView } from './views/examples/NestedFormsExampleView';

export const ROUTES = [
  {
    path: '/examples/nested-forms',
    title: 'Nested forms',
    component: NestedFormsExampleView,
  },
  {
    path: '/examples/masked-fields',
    title: 'Masked fields',
    component: MaskedFieldsExampleView,
  },
];
