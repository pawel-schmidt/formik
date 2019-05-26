import { DependentFieldsExampleView } from './views/examples/DependentFieldsExampleView';
import { MaskedFieldsExampleView } from './views/examples/MaskedFieldsExampleView';
import { NestedFormsExampleView } from './views/examples/NestedFormsExampleView';
import { RadioBoxesExampleView } from './views/examples/RadioBoxesExampleView';

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
  {
    path: '/examples/dependent-fields',
    title: 'Dependent fields',
    component: DependentFieldsExampleView,
  },
  {
    path: '/examples/radio-boxes',
    title: 'Radio boxes',
    component: RadioBoxesExampleView,
  },
];
