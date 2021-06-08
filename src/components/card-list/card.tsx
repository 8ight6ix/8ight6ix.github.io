/* eslint-disable react/require-default-props */

import React, { useMemo, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';

import { ArtworkJS } from 'modules/store/model/artwork';
import styleCardList from 'styles/component/card-list.module.scss';
import Thumbnail from 'components/card-list/thumbnail';
import Content from 'components/card-list/content';
import Keyword from 'components/card-list/keywords';

const cxCardList = classNames.bind(styleCardList);

interface CardProps {
  draw?: (item: ArtworkJS, height: number) => void;
  item: ArtworkJS;
  width: number;
  x: number;
  y: number;
}

function Card({ draw, item, width, x, y }: CardProps) {
  const className = useMemo(() => cxCardList('card'), []);
  const $card = useRef<HTMLDivElement>(null);
  const style = useMemo(
    () => ({ width, transform: `translate(${x}px, ${y}px)` }),
    [width, x, y],
  );

  // 높이 측정용 Componenet의 너비가 변하면 draw를 요청합니다.
  useEffect(() => {
    if (draw) draw(item, $card.current?.clientHeight ?? 0);
  }, [style]);

  const onClick = useCallback(() => {
    window.open(item.path, '_blank')?.focus();
  }, []);

  return (
    <div
      ref={$card}
      className={className}
      style={style}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onClick}
    >
      <Thumbnail title={item.title} width={width} src={item.thumbnail} />
      <Content
        title={item.title}
        date={item.date}
        creator={item.creator}
        description={item.description}
      />
      <Keyword words={item.keyword} />
    </div>
  );
}

export default Card;
