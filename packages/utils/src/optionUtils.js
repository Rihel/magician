import * as changeCase from 'change-case';
const createOptions = (params) => {
  let options = [];
  if (!params) throw new TypeError('[createOptions] 参数不能为空');
  if (Array.isArray(params)) {
    options = params;
  } else if (!Array.isArray(params.list)) {
    throw new TypeError('[createOptions] 参数 list 必须是个数组');
  } else {
    options = params.list.map((item) => {
      return {
        label: item[params.labelKey],
        value: item[params.valueKey],
        ...item,
      };
    });
  }
  const res = {
    getLabel: (value) => {
      const option = res.getOption(value);
      return option ? option.label : '';
    },
    getOption: (value) => {
      return options.find((item) => item.value === value);
    },
    getOptions: () => {
      return options;
    },
  };
  return res;
};

const createEnum = (list = [], constantMode = false) => {
  const res = list
    .map((item) => {
      return constantMode ? changeCase.constantCase(item) : item;
    })
    .reduce((acc, val) => ({ ...acc, [val]: val }), {});
  list.forEach((item) => {
    const methodName = changeCase.camelCase(`is-${item}`);
    res[methodName] = (v) => v === item;
  });
  return res;
};
export default {
  createOptions,
  createEnum,
};
