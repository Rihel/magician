import { createContext, useCallback, useContext } from 'react';

const SidebarContext = createContext(null);

export const SidebarProvider = ({ clickItem, renderItemRight, children }) => {
  const clickItemHandle = useCallback(
    (data) => {
      if (clickItem) clickItem(data);
    },
    [clickItem],
  );
  const renderRight = useCallback(
    (data) => {
      return renderItemRight ? renderItemRight(data) : null;
    },
    [renderItemRight],
  );
  return (
    <SidebarContext.Provider value={{ clickItemHandle, renderRight }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const value = useContext(SidebarContext);
  return {
    ...value,
  };
};
