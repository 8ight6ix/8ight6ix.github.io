/* eslint-disable react/require-default-props */

import React, { useMemo, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import { ArtworkJS } from 'modules/store/model/artwork';
import styleCardList from 'styles/component/card-list.module.scss';
import Thumbnail from './thumbnail';

const cxCardList = classNames.bind(styleCardList);

interface CardProps {
  draw?: (opts: ArtworkJS, height: number) => void;
  opts: ArtworkJS;
  width: number;
  x: number;
  y: number;
}

function Card({ draw, opts, width, x, y }: CardProps) {
  const className = useMemo(() => cxCardList('card'), []);
  const $card = useRef<HTMLDivElement>(null);
  const style = useMemo(
    () => ({ width, transform: `translate(${x}px, ${y}px)` }),
    [width, x],
  );

  // 높이 측정용 Componenet의 높이가 변하면 draw를 요청합니다.
  useEffect(() => {
    if (draw) draw(opts, $card.current?.clientHeight ?? 0);
  }, [draw]);

  return (
    <div ref={$card} className={className} style={style}>
      <Thumbnail title={opts.title} width={width} src={opts.thumbnail} />
    </div>
  );
}

export default Card;
