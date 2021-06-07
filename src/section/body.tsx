import React, { useMemo, useRef, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { List } from 'immutable';

import { CONFIG } from 'constant';
import styleBody from 'styles/layout/body.module.scss';
import CardList from 'components/card-list';

const cxBody = classNames.bind(styleBody);

function Body() {
  const className = useMemo(() => cxBody('body'), []);
  const $body = useRef<HTMLDivElement>(null);

  const [stageWidth, setStageWidth] = useState(0);
  const [bodyWidth, setBodyWidth] = useState(0);
  const [columnCnt, setColumnCnt] = useState(0);
  const [columnSize, setColumnSize] = useState(0);
  const [grid, setGrid] = useState(List<number>());

  // Window 사이즈가 변하면 그리드 시스템을 리사이즈 합니다.
  useEffect(() => {
    const resize = () => {
      setStageWidth(document.body.clientWidth);
      setBodyWidth($body.current?.clientWidth ?? 0);
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  // BodyWidth가 변하면 Cloumn의 개수와 사이즈를 수정합니다.
  useEffect(() => {
    if (bodyWidth > 0) {
      let cnt = 1;

      if (stageWidth >= 1440) cnt = 4;
      else if (stageWidth >= 1240) cnt = 3;
      else if (stageWidth >= 600) cnt = 2;

      const valid = bodyWidth - CONFIG.cardListGap * (cnt + 1);
      const size = valid / cnt;

      setColumnCnt(cnt);
      setColumnSize(size);
    }
  }, [bodyWidth, stageWidth]);

  // Column 개수와 사이즈가 변하면 Grid 사이즈를 조정합니다.
  useEffect(() => {
    const list = Array(columnCnt);
    let x = CONFIG.cardListGap;

    for (let i = 0; i < columnCnt; i += 1) {
      list[i] = x;
      x += columnSize + CONFIG.cardListGap;
    }

    setGrid(List(list));
  }, [columnCnt, columnSize]);

  return (
    <div ref={$body} className={className}>
      <CardList grid={grid} columnSize={columnSize} />
    </div>
  );
}

export default Body;
