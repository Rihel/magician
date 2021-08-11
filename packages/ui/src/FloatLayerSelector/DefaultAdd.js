import React, { memo } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { fls } from './config';

const AddCard = ({ onClick, text, style }) => {
  return (
    <div className={fls('default-add')} style={style} onClick={onClick}>
      <PlusOutlined />
      <span>{text || '添加'}</span>
    </div>
  );
};

export default memo(AddCard);
