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

const createEnum = (list, constantMode = false) => {
  if (!list) {
    throw new TypeError('[OptionUtils.createEnum] list 不能为空');
  }

  const res = {};
  const genMethodName = (key) => changeCase.camelCase(`is-${key}`);
  const genName = (key) => (constantMode ? changeCase.constantCase(key) : key);

  const append = (key, value) => {
    // res[genName(key)] = value;
    Object.defineProperty(res, genName(key), {
      value,
      writable: false,
      enumerable: true,
      configurable: false,
    });
    Object.defineProperty(res, genMethodName(key), {
      value: (v) => v === value,
      writable: false,
      ennumerable: false,
      configurable: false,
    });
  };
  if (Array.isArray(list)) {
    list.forEach((item) => append(item, item));
  } else {
    Object.keys(list).forEach((key) => {
      append(key, list[key]);
    });
  }

  return res;
};
export default {
  createOptions,
  createEnum,
};
