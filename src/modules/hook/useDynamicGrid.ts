import { useEffect, useState, useMemo } from 'react';
import { List } from 'immutable';

import { CONFIG } from 'constant';

interface useDynamicGridProps {
  girdWidth: number;
}

function useDynamicGrid({ girdWidth }: useDynamicGridProps) {
  const [stageWidth, setStageWidth] = useState(document.body.clientWidth);

  const columnCnt = useMemo(() => {
    if (girdWidth === 0) return 0;
    if (stageWidth >= CONFIG.windowLarge) return CONFIG.girdCntLarge;
    if (stageWidth >= CONFIG.windowMedium) return CONFIG.gridCntMedium;
    if (stageWidth >= CONFIG.windowRegular) return CONFIG.gridCntRegular;
    if (stageWidth >= CONFIG.windowSmall) return CONFIG.gridCntSmall;
    return CONFIG.gridCntDefault;
  }, [stageWidth, girdWidth]);

  const columnSize = useMemo(() => {
    if (columnCnt === 0) return 0;
    const valid = girdWidth - CONFIG.cardListGap * (columnCnt + 1);
    return valid / columnCnt;
  }, [columnCnt, girdWidth]);

  const layout = useMemo(() => {
    const list = Array(columnCnt);
    let x = CONFIG.cardListGap;

    for (let i = 0; i < columnCnt; i += 1) {
      list[i] = x;
      x += columnSize + CONFIG.cardListGap;
    }

    return List(list);
  }, [columnCnt, columnSize]);

  // Window 사이즈가 변하면 그리스 시스템을 리사이즈합니다.
  useEffect(() => {
    const resize = () => {
      setStageWidth(document.body.clientWidth);
    };
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return {
    stageWidth,
    columnCnt,
    columnSize,
    layout,
  };
}

export default useDynamicGrid;
