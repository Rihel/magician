const goHashPage = (path) => {
  window.location.hash = path;
};

const openNewTab = (link) => () => window.open(link, '_blank');

export default {
  goHashPage,
  openNewTab,
};
