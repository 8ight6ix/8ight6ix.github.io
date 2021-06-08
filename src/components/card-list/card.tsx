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
  draw?: (index: number, height: number) => void;
  index: number;
  opts: ArtworkJS;
  width: number;
  x: number;
  y: number;
}

function Card({ draw, index, opts, width, x, y }: CardProps) {
  const className = useMemo(() => cxCardList('card'), []);
  const $card = useRef<HTMLDivElement>(null);
  const style = useMemo(
    () => ({ width, transform: `translate(${x}px, ${y}px)` }),
    [width, x, y],
  );

  // 높이 측정용 Componenet의 너비가 변하면 draw를 요청합니다.
  useEffect(() => {
    if (draw) draw(index, $card.current?.clientHeight ?? 0);
  }, [$card.current?.clientHeight, $card.current?.clientWidth]);

  const onClick = useCallback(() => {
    window.open(opts.path, '_blank')?.focus();
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
      <Thumbnail title={opts.title} width={width} src={opts.thumbnail} />
      <Content
        title={opts.title}
        date={opts.date}
        creator={opts.creator}
        description={opts.description}
      />
      <Keyword words={opts.keyword} />
    </div>
  );
}

export default Card;
