import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Company } from '../company/company';

export const CompanyActions = createActionGroup({
  source: 'Company',
  events: {
    'Load Companies': emptyProps(),
    'Load Companies Success': props<{ companies: Company[] }>(),
    'Delete company': props<{company:Company}>(),
  }
});