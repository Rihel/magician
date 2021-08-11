import { useCallback, useState } from 'react';

const useFloatLayer = ({ onClose, onConfirm, value }) => {
  // 弹窗状态
  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);

  const close = useCallback(() => {
    setVisible(false);
    if (onClose) onClose();
  }, [onClose]);

  const [confirmLoading, setConfirmLoading] = useState(false);
  const okHandle = useCallback(async () => {
    // 执行异步函数
    try {
      if (onConfirm) {
        setConfirmLoading(true);
        // @ts-ignore
        const payload = value && typeof value === 'function' ? value() : value;
        const res = await onConfirm(payload);
        if (res) {
          close();
        }
      }
    } catch (error) {
      throw error;
    } finally {
      setConfirmLoading(false);
    }
  }, [close, onConfirm, value]);

  return {
    visible,
    open,
    close,
    okHandle,
    confirmLoading,
  };
};

export default useFloatLayer;
