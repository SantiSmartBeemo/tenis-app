import UserResolver from './users';
import merge from 'lodash.merge';

const resolvers = merge({}, UserResolver);

export default resolvers;