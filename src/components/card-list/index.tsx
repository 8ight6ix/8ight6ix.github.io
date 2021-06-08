import React, { useCallback, useMemo, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { List } from 'immutable';

import { CONFIG } from 'constant';
import Heap from 'modules/util/heap';
import useArtwork from 'modules/hook/useArtwork';
import Card from 'components/card-list/card';
import styleCardList from 'styles/component/card-list.module.scss';

const cxCardList = classNames.bind(styleCardList);

interface CardListProps {
  grid: List<number>;
  columnSize: number;
  columnCnt: number;
}

interface ViewItems {
  [index: number]: number;
  length: number;
}

const INVISIBEL_X = -99999;
const INVISIBEL_Y = -99999;

const createCompFunc = (columns: number[]) => (a: number, b: number) => {
  if (columns[a] === columns[b]) return a < b;
  return columns[a] < columns[b];
};

function CardList({ grid, columnSize, columnCnt }: CardListProps) {
  const className = useMemo(() => cxCardList('list'), []);
  const artwork = useArtwork();

  const items = useMemo(() => artwork.getItems(), [artwork.getItems]); // 전체 카드 데이터
  const viewItems = useMemo<ViewItems>(
    () => ({ length: 0 }),
    [grid, columnSize, columnCnt, items],
  ); // 화면에 그려지질 카드 데이터

  const columns = useMemo<number[]>(() => Array(columnCnt), [columnCnt]); // 각 Columns의 현재 높이를 저장
  const heap = useMemo(() => new Heap(createCompFunc(columns)), [columns]); // 가장 낮은 높이의 Cloumn을 찾기위한 힙

  const [$visibleCards, setVisibleCards] = useState<JSX.Element[]>([]); // 화면에 보여지는 카드 컴포넌트 리스트
  const [style, setStyle] = useState({ height: 0 }); // 카드 리스트 스타일

  // 화면에 카드를 그리는 함수입니다.
  const draw = useCallback(() => {
    heap.claer();
    columns.fill(0).forEach((_, i) => heap.add(i));

    const $newVisibleCards = Array.from(viewItems).map((height, index) => {
      const item = items[index];
      const column = heap.poll() as number;
      const x = grid.get(column) ?? INVISIBEL_X;
      const y = columns[column] ?? INVISIBEL_Y;

      columns[column] += height + CONFIG.cardListGap;
      heap.add(column);

      return (
        <Card
          key={`visible-${item.id}`}
          index={index}
          opts={item}
          width={columnSize}
          x={x}
          y={y}
        />
      );
    });

    const height = Math.max(...columns) - CONFIG.cardListGap;
    setVisibleCards($newVisibleCards);
    setStyle({ height: Number.isFinite(height) ? height : 0 });
  }, [viewItems, columns, heap]);

  // 화면에 그릴 카드 데이터를 준비하는 함수입니다.
  const readyToDraw = useCallback(
    (index: number, height: number) => {
      if (viewItems[index] === undefined) viewItems.length += 1;
      viewItems[index] = height;
      if (viewItems.length === items.length) draw();
    },
    [viewItems, items, draw],
  );

  // 화면에 그릴 카드의 수치를 확인하기위해, 보이지 않는 카드를 생성합니다.
  const $hiddenCards = useMemo<JSX.Element[]>(() => {
    return items.map((item, index) => (
      <Card
        key={`hidden-${item.id}`}
        draw={readyToDraw}
        index={index}
        opts={item}
        width={columnSize}
        x={INVISIBEL_X}
        y={INVISIBEL_Y}
      />
    ));
  }, [readyToDraw, columnSize]);

  // 카드를 그리는 과정에서 스크롤 때문에 가로 크기가 틀어지는 것을 방지합니다.
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [style]);

  return (
    <div className={className} style={style}>
      {$hiddenCards}
      {$visibleCards}
    </div>
  );
}

export default CardList;
