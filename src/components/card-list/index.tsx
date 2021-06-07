import React, { useCallback, useMemo, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { List } from 'immutable';

import { CONFIG } from 'constant';
import Heap from 'modules/util/heap';
import useArtwork from 'modules/store/hook/useArtwork';
import { ArtworkJS } from 'modules/store/model/artwork';
import Card from 'components/card-list/card';
import styleCardList from 'styles/component/card-list.module.scss';

const cxCardList = classNames.bind(styleCardList);

interface CardListProps {
  grid: List<number>;
  columnSize: number;
}

interface DrawData {
  item: ArtworkJS;
  height: number;
}

const INVISIBEL_X = -99999;
const INVISIBEL_Y = -99999;

function CardList({ grid, columnSize }: CardListProps) {
  const artwork = useArtwork();
  const className = useMemo(() => cxCardList('list'), []);

  const items = useMemo(() => artwork.getItems(), [artwork.getItems]);
  const columns = useMemo<number[]>(() => Array(grid.size).fill(0), [grid]);
  const minHeap = useMemo(() => {
    const comp = (a: number, b: number) => {
      if (columns[a] === columns[b]) return a < b;
      return columns[a] < columns[b];
    };

    const heap = new Heap<number>(comp);
    columns.forEach((_, i) => heap.add(i));
    return heap;
  }, [columns]);

  const [drawReady, setDrawReady] = useState(true); // 화면에 그릴 준비 상태
  const [cardCnt, setCardCnt] = useState(0); // 화면에 그릴 카드 개수
  const [pendding, setPendding] = useState<DrawData[]>([]); // 화면에 그릴 카드 데이터

  const [$visibleCards, setVisibleCards] = useState<JSX.Element[]>([]);
  const [style, setStyle] = useState({ height: 0 });

  // 그리드 크기가 조정되거나, 작품 데이터가 수정되면 화면에 카드를 다시 그립니다.
  useEffect(() => {
    setDrawReady(false);
    setCardCnt(items.length);
    setPendding([]);
  }, [grid, columnSize, items]);

  // 화면에 그릴 카드 데이터를 준비합니다.
  const draw = useCallback(
    (item: ArtworkJS, height: number) => {
      pendding.push({ item, height });
      if (pendding.length === cardCnt) setDrawReady(true);
    },
    [pendding],
  );

  // 화면에 그릴 카드의 수치를 확인하기위해, 보이지 않는 카드를 생성합니다.
  const $hiddenCards = useMemo<JSX.Element[]>(() => {
    return items.map((item) => (
      <Card
        key={`hidden-${item.id}`}
        draw={draw}
        opts={item}
        width={columnSize}
        x={INVISIBEL_X}
        y={INVISIBEL_Y}
      />
    ));
  }, [draw]);

  // 화면에 카드를 그릴 준비가 완료되면, 기존의 카드를 교체합니다.
  useEffect(() => {
    if (drawReady) {
      const visibleCards = pendding.map(({ item, height }) => {
        const index = minHeap.poll() as number;
        const x = grid.get(index) ?? INVISIBEL_X;
        const y = columns[index] ?? INVISIBEL_Y;

        columns[index] += height + CONFIG.cardListGap;
        minHeap.add(index);

        return (
          <Card
            key={`visible-${item.id}`}
            opts={item}
            width={columnSize}
            x={x}
            y={y}
          />
        );
      });

      const height = Math.max(...columns) - CONFIG.cardListGap;
      setVisibleCards(visibleCards);
      setStyle({ height: Number.isFinite(height) ? height : 0 });
    }
  }, [drawReady]);

  // 카드를 그리는 과정에서 스크롤 때문에 가로 크리가 틀어지는 것을 방지합니다.
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
