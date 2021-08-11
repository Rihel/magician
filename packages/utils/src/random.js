const genImage = (hue, w, h, text, fontSize = 30) => {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
  ctx.rect(0, 0, w, h);
  ctx.fill();
  ctx.closePath();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${fontSize}px 微软雅黑`;
  ctx.textAlign = 'center';
  // ctx.textBaseline = 'middle';
  ctx.fillText(text, w / 2, h / 2 + fontSize / 2);
  return canvas.toDataURL();
};

const genRangeNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const genArr = (size, factroy) => {
  return new Array(size).fill(0).map((_, i) => (factroy ? factroy(i) : i));
};

const genStr = (size) => {
  return genArr(size, () =>
    String.fromCharCode(genRangeNumber(19668, 40869)),
  ).join('');
};

const idGeneratorFactroy = (storageKey, options) => {
  const { step, storage } = Object.assign(
    {
      step: 1,
      storage: localStorage,
    },
    options,
  );
  let id = 0;
  if (storageKey) {
    const sv = storage.getItem(storageKey);
    if (sv) {
      id = parseInt(sv);
    }
  }
  return () => {
    id = id + step;
    if (storageKey) {
      storage.setItem(storageKey, id);
    }
    return id;
  };
};

const getOneFactroy = (list = []) => {
  return () => {
    return list[genRangeNumber(0, list.length)];
  };
};

const genTree = (size, factroy, level = 2) => {
  const genId = idGeneratorFactroy();

  const run = (size, factroy, parentId, idPath) => {
    const arr = genArr(size, (i) => {
      let children = [];
      let id = genId();
      let childIdPath = `${idPath}/${id}`;
      if (idPath.split('/').length < level) {
        children = run(size, factroy, id, childIdPath);
      }

      return {
        id,
        children,
        parentId: parentId,
        idPath: childIdPath,
        ...factroy(id),
      };
    });

    return arr;
  };
  return run(size, factroy, 0, '0');
};

export default {
  idGeneratorFactroy,
  genStr,
  genArr,
  genRangeNumber,
  genImage,
  getOneFactroy,
  genTree,
};
