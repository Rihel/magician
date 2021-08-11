import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import Bricks from 'bricks.js';

const Waterfall = forwardRef(
  ({ columns, gutter, children, refreshDeps, ...props }, ref) => {
    const instance = useRef(null);
    const container = useRef(null);

    const refresh = useCallback(() => {
      instance.current.pack();
    }, []);
    useEffect(() => {
      if (container.current) {
        instance.current = Bricks({
          container: container.current,
          packed: 'data-packed',
          sizes: [{ columns, gutter }],
        });
        instance.current.pack();
      }
      return () => {
        instance.current = null;
      };
    }, [columns, gutter]);

    useEffect(() => {
      refresh();
    }, [refresh, ...refreshDeps]);

    useImperativeHandle(ref, () => {
      return {
        getWrapper: () => container.current,
        refresh,
      };
    });

    return (
      <div {...props} ref={container}>
        {children}
      </div>
    );
  },
);
Waterfall.defaultProps = {
  gutter: 20,
  refreshDeps: [],
};

export default Waterfall;
