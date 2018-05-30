import { findIndexFiles } from 'create-index';

export const createIndex = () => {
  console.info('run createIndex');
  const result = findIndexFiles('./src/modules/');
  console.log('result: ', result);
};

export default createIndex();
