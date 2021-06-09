import React, { useMemo, useRef } from 'react';
import classNames from 'classnames/bind';

import useDynamicGrid from 'modules/hook/useDynamicGrid';
import useResizeDetector from 'modules/hook/useResizeDetector';
import styleBody from 'styles/layout/body.module.scss';
import CardList from 'components/card-list';

const cxBody = classNames.bind(styleBody);

function Body() {
  const className = useMemo(() => cxBody('body'), []);
  const $body = useRef<HTMLDivElement>(null);

  const { width } = useResizeDetector({ ref: $body, skipOnMount: false });
  const grid = useDynamicGrid({ girdWidth: width });

  return (
    <div ref={$body} className={className}>
      <CardList
        grid={grid.layout}
        columnSize={grid.columnSize}
        columnCnt={grid.columnCnt}
      />
    </div>
  );
}

export default Body;
