import * as changeCase from 'change-case';
import Icon from '@ant-design/icons';
import React from 'react';

const iconsFactroy = require.context('@ant-design/icons', false, /.*\.js/);

const iconNames = iconsFactroy
  .keys()
  .map((key) => changeCase.paramCase(key).replace('-js', ''));

const iconMap = iconsFactroy.keys().reduce((acc, key) => ({
  ...acc,
  [changeCase.paramCase(key).replace('-js', '')]: iconsFactroy(key).default,
}));

const AntIcon = ({ type, component, ...props }) => {
  const IconComponent = iconMap[type];
  if (component) {
    return <Icon component={component} {...props} />;
  }
  return Icon ? <IconComponent {...props} /> : null;
};

AntIcon.iconNames = iconNames;

export default AntIcon;
