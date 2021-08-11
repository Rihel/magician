import {
  ArrowRight,
  BookmarkLine,
  IconAdd,
  IconBarChart,
  IconBookmark,
  IconHandCoin,
  IconProject,
  IconQrCode,
  IconRocket,
  IconServiceApi,
  IconServiceApollo,
  IconServiceArchery,
  IconServiceBug,
  IconServiceData,
  IconServiceDatabase,
  IconServiceDevops,
  IconServiceGitlab,
  IconServiceGovernance,
  IconServiceLog,
  IconServiceLoki,
  IconServiceMessage,
  IconServiceNol,
  IconServiceResource,
  IconServiceTapd,
  IconServiceUmi,
  IconServiceYapi,
  IconShieldCheck,
  IconSuccessful,
  IconTime,
  MenuLine,
} from '@magician/icons';

import Icon from '@ant-design/icons';
import React from 'react';
import { bem } from '../utils/config';

const iconfontCls = bem('iconfont');

const map = {
  bookmarkLine: BookmarkLine,
  yapi: IconServiceYapi,
  qrcode: IconQrCode,
  barChart: IconBarChart,
  hand: IconHandCoin,
  bookmark: IconBookmark,
  shieldCheck: IconShieldCheck,
  rocket: IconRocket,
  resource: IconServiceResource,
  apollo: IconServiceApollo,
  archery: IconServiceArchery,
  add: IconAdd,
  api: IconServiceApi,
  bug: IconServiceBug,
  data: IconServiceData,
  database: IconServiceDatabase,
  devops: IconServiceDevops,
  governance: IconServiceGovernance,
  log: IconServiceLog,
  message: IconServiceMessage,
  tapd: IconServiceTapd,
  successful: IconSuccessful,
  time: IconTime,
  nol: IconServiceNol,
  gitlab: IconServiceGitlab,
  ump: IconServiceUmi,
  loki: IconServiceLoki,
  project: IconProject,
  arrowRight: ArrowRight,
  menu2: MenuLine,
};

const Iconfont = ({ type, ...other }) => {
  const component = map[type];
  return <Icon className={iconfontCls()} component={component} {...other} />;
};
export default Iconfont;
