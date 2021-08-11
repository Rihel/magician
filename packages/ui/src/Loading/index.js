import { Col, Row, Spin } from 'antd';

import React from 'react';

const Loading = ({ text }) => {
  return (
    <Row justify="center">
      <Col>
        <Spin tip={text}></Spin>
      </Col>
    </Row>
  );
};

Loading.defaultProps = {
  text: '正在寻找星辰大海...',
};

export default Loading;
