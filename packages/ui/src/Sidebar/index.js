import './style.less';

import React, {
  Fragment,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';

import AllPane from './components/AllPane';
import AntIcon from '../AntIcon';
import SideItem from './components/SideItem';
import SidebarList from './components/SidebarList';
import { SidebarProvider } from './context';
import Transition from '../Transition';
import { sidebarCls } from './config';

const Sidebar = forwardRef(
  ({ height, zIndex, items, categories, clickItem, renderItemRight }, ref) => {
    const [collapsed, setCollapsed] = useState(true);
    const [showMask, setShowMask] = useState(false);
    const [showAllPane, setShowAllPane] = useState(false);
    const showAll = () => {
      setCollapsed(false);
      setShowMask(true);
      setShowAllPane(true);
    };
    const handleClose = () => {
      setShowMask(false);
      setCollapsed(true);
      setShowAllPane(false);
    };

    const wrapperWidth = useMemo(() => {
      return collapsed ? 48 : 240;
    }, [collapsed]);

    useImperativeHandle(
      ref,
      () => ({
        open: showAll,
        close: handleClose,
      }),
      [showAll, handleClose],
    );
    return (
      <Fragment>
        <SidebarProvider
          clickItem={clickItem}
          renderItemRight={renderItemRight}
        >
          <div
            className={sidebarCls('wrapper')}
            style={{ width: wrapperWidth, height, zIndex }}
          >
            <div className={sidebarCls('all')} onClick={showAll}>
              <SideItem
                text="全部产品"
                collapsed={collapsed}
                icon={<AntIcon type="bars-outlined" />}
                contentClass={sidebarCls('all-content')}
                className="all-item"
                right={
                  <AntIcon
                    className={sidebarCls('all-right-icon')}
                    type="right-outlined"
                  />
                }
              />
            </div>
            <SidebarList
              onChnage={() => {
                setCollapsed(false);
                setShowMask(true);
              }}
              collapsed={collapsed}
              data={items}
            />
          </div>
          <Transition.FadeLeft show={showAllPane}>
            <AllPane
              onClose={handleClose}
              style={{ zIndex: zIndex - 1 }}
              categories={categories}
            />
          </Transition.FadeLeft>
          <Transition.Fade show={showMask}>
            <div
              className={sidebarCls('mask')}
              onClick={handleClose}
              style={{ height, zIndex: zIndex - 2 }}
            ></div>
          </Transition.Fade>
        </SidebarProvider>
      </Fragment>
    );
  },
);
Sidebar.defaultProps = {
  height: '100vh',
  zIndex: 10,
  items: [],
  categories: [],
};
export default Sidebar;
