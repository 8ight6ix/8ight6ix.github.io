import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import debounce from 'lodash.debounce';

import { CONFIG } from 'constant';

interface UseResizeDetector {
  skipOnMount: boolean;
  ref: React.RefObject<Element | null>;
}

interface SizeData {
  width: number | undefined;
  height: number | undefined;
}

function useResizeDetector({ ref, skipOnMount }: UseResizeDetector) {
  const skipResize = useRef<boolean>(skipOnMount);
  const resizeHandler = useRef<ReturnType<typeof debounce>>();
  const [size, setSize] = useState<SizeData>({
    width: undefined,
    height: undefined,
  });

  const resizeCallback = useCallback<ResizeObserverCallback>(
    (entries) =>
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect ?? {};
        if (skipResize.current) skipResize.current = false;
        else setSize({ width: Math.round(width), height: Math.round(height) });
      }),
    [],
  );

  useEffect(() => {
    resizeHandler.current = debounce(resizeCallback, CONFIG.resizeWait);
    const reszieObserver = new ResizeObserver(resizeHandler.current);
    if (ref.current) reszieObserver.observe(ref.current);

    return () => {
      reszieObserver.disconnect();
      resizeHandler.current?.cancel();
    };
  }, [ref.current]);

  return size;
}

export default useResizeDetector;
