/* eslint-disable react/require-default-props */

import React, { useMemo, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';

import { ArtworkJS } from 'modules/store/model/artwork';
import useResizeDetector from 'modules/hook/useResizeDetector';
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
  const className = useMemo(() => cxCardList('card', 'view'), []);
  const $card = useRef<HTMLDivElement>(null);

  const cardType = useMemo(() => {
    return !draw && width ? 'visible' : 'hidden';
  }, [draw, width]);
  const style = useMemo(() => {
    return { width, transform: `translate(${x}px, ${y}px)` };
  }, [width, x, y]);

  const { height } = useResizeDetector({ ref: $card, skipOnMount: !draw });

  // 높이 측정용 Componenet의 설정이 변하면 draw를 요청합니다.
  useEffect(() => {
    if (draw && width && height) draw(index, height ?? 0);
  }, [x, y, height]);

  const onClick = useCallback(() => {
    window.open(opts.path, '_blank')?.focus();
  }, []);

  return (
    <div
      data-card-type={cardType}
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
