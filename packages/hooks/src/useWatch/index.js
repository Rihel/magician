import { useEffect, useRef } from 'react';

export default function useWatch(dep, cb, config) {
  const prevValue = useRef();
  const isStop = useRef(false);
  const isInit = useRef(false);

  useEffect(() => {
    const exec = () => cb(prevValue.current);

    if (!isStop.current) {
      if (!isInit.current) {
        isInit.current = true;
        if (config?.immediate) {
          exec();
        }
      } else {
        exec();
      }
      prevValue.current = dep;
    }
  }, [dep]);

  return () => {
    isStop.current = true;
  };
}
