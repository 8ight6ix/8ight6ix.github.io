import React, { useMemo } from 'react';
import classNames from 'classnames/bind';
import { CONFIG } from 'constant';

import styleCardList from 'styles/component/card-list.module.scss';

const cxCardList = classNames.bind(styleCardList);

interface ThumbnailProps {
  title: string;
  width: number;
  src: string;
}

function Thumbnail({ title, width, src }: ThumbnailProps) {
  const alt = useMemo(() => `${title} thumbnail image`, []);
  const height = useMemo(() => width / CONFIG.thumbnailRate, [width]);
  const style = useMemo(() => ({ width, height }), [height]);
  const className = useMemo(() => cxCardList('thumbnail'), []);

  return (
    <div className={className} style={style}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Thumbnail;
