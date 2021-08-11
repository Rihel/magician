const createBem = (libPrefix) => {
  const classCreator = (name) => {
    return libPrefix ? libPrefix + '-' + name : name;
  };

  const bem = (blockName) => {
    const blockFunc = (name) => {
      const cn = name ? `${blockName}-${name}` : blockName;
      return classCreator(cn);
    };
    return blockFunc;
  };
  return bem;
};

export default createBem;
