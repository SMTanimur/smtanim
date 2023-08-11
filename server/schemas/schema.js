import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import post from './post';
import author from './author';
import project from './project';
import skill from './skill';
import blockContent from './blockContent';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([author, project, post, skill, blockContent]),
});
