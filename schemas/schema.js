import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import page from './page';
import timelineStep from './timeline-step';
import activity from './activity';
import category from './category';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([page, timelineStep, activity, category]),
});
