import './style.less';

import React, { useCallback, useMemo, useState } from 'react';

import DefaultAdd from './DefaultAdd';
import Grid from '../Grid';
import { Modal } from 'antd';
import adjust from 'ramda/es/adjust';
import always from 'ramda/es/always';
import { fls } from './config';
import { useFloatLayer } from '@magician/hooks';

const bodyStyle = {
  maxHeight: '70vh',
  overflowX: 'hidden',
  overflowY: 'auto',
};

function FloatLayerSelector(props) {
  const {
    addNode,
    addNodeStyle,
    col,
    value,
    title,
    renderItem,
    onClose,
    onChange,
    onOpen,
    formNode,
    form,
    gutter,
    renderLayout,
  } = props;
  const [data, setData] = useState([]);
  const { visible, open, close } = useFloatLayer({});
  const [curEditIndex, setCurEditIndex] = useState(null);
  const finallyAddNode = useMemo(() => {
    if (addNode && React.isValidElement(addNode)) {
      return addNode;
    }
    return <DefaultAdd style={addNodeStyle} />;
  }, [addNode, addNodeStyle]);

  const clickHandle = useCallback(() => {
    open();
    if (onOpen) onOpen();
  }, [open, onOpen]);

  const closeHandle = useCallback(() => {
    form.resetFields();
    close();
    setCurEditIndex(null);
    if (onClose) onClose();
  }, [close, onClose, form]);

  const updateValue = useCallback(
    (updateFn) => {
      if (onChange) {
        if (value) {
          const newValue = updateFn(value);
          setData(newValue);
          onChange(newValue);
          form.resetFields();
        }
      }
    },
    [onChange, value, form],
  );

  const okHandle = useCallback(async () => {
    await form.validateFields();
    const formValue = form.getFieldsValue();
    updateValue((v) => {
      if (curEditIndex !== null) {
        return adjust(curEditIndex, always(formValue), v);
      }
      return [...v, formValue];
    });
    closeHandle();
  }, [closeHandle, updateValue, form, curEditIndex]);

  const deleteHandle = useCallback(
    (index) => {
      updateValue((prevState) => {
        return prevState.filter((_, i) => {
          return i !== index;
        });
      });
    },
    [updateValue],
  );

  const editHandle = useCallback(
    (item, index) => {
      clickHandle();
      setCurEditIndex(index);
      form.setFieldsValue(item);
    },
    [form, clickHandle],
  );

  const addNodes = (
    <div className={fls('placeholder')} onClick={clickHandle}>
      {finallyAddNode}
    </div>
  );
  const itemNodes = data.map((item, index) => {
    return renderItem
      ? renderItem(item, {
          remove: () => deleteHandle(index),
          edit: () => editHandle(item, index),
        })
      : null;
  });

  return (
    <div className={fls()}>
      {renderLayout ? (
        renderLayout({
          addNode: addNodes,
          dataNodes: itemNodes,
        })
      ) : (
        <Grid gutter={gutter} col={col}>
          {addNodes}
          {itemNodes}
        </Grid>
      )}
      <Modal
        width="70%"
        visible={visible}
        okText="确定"
        cancelText="取消"
        onCancel={closeHandle}
        destroyOnClose
        title={title}
        bodyStyle={bodyStyle}
        onOk={okHandle}
      >
        {formNode}
      </Modal>
    </div>
  );
}
FloatLayerSelector.defaultProps = {
  col: 3,
  gutter: 40,
};
export default FloatLayerSelector;
