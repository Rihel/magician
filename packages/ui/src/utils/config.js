import { createBem } from '@magician/utils';
export const LibConfig = {
  classPrefix: 'mg',
};

const bem = createBem(LibConfig.classPrefix);
export { bem };
