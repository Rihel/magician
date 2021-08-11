import { createBem } from '@r-magician/utils';
export const LibConfig = {
  classPrefix: 'mg',
};

const bem = createBem(LibConfig.classPrefix);
export { bem };
