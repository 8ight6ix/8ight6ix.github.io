import React, { useMemo, useRef } from 'react';
import classNames from 'classnames/bind';

import useDynamicGrid from 'modules/hook/useDynamicGrid';
import styleBody from 'styles/layout/body.module.scss';
import CardList from 'components/card-list';

const cxBody = classNames.bind(styleBody);

function Body() {
  const className = useMemo(() => cxBody('body'), []);
  const $body = useRef<HTMLDivElement>(null);

  const grid = useDynamicGrid({ girdWidth: $body.current?.clientWidth ?? 0 });

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
