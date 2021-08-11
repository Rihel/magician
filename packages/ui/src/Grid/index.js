import { Col, Row } from 'antd';
import React, { memo, useMemo } from 'react';

import { bem } from '../utils/config';
import classNames from 'classnames';
import omit from 'ramda/es/omit';
import splitEvery from 'ramda/es/splitEvery';

const grid = bem('grid');

const Grid = ({
  children,
  col,
  style,
  gutter,
  rowStyle,
  className,
  height,
  cellStyle,
}) => {
  const newChildren = useMemo(() => {
    return splitEvery(col, React.Children.toArray(children));
  }, [children, col]);

  const cellStyleCached = useMemo(() => {
    return omit(['width', 'height'], cellStyle);
  }, [cellStyle]);

  return (
    <div className={classNames(grid(), className)} style={style}>
      {newChildren.map((columns, index) => {
        return (
          <Row
            gutter={gutter}
            style={{
              marginBottom: gutter,
              ...rowStyle,
            }}
            key={`grid_row_key_${index}`}
          >
            {columns.map((child, i) => {
              return (
                <Col
                  style={{
                    width: `${100 / col}%`,
                    height,
                  }}
                  key={`grid_col_key_${i}`}
                >
                  <div className={grid('cell')} style={cellStyleCached}>
                    {child}
                  </div>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </div>
  );
};

export default memo(Grid);
