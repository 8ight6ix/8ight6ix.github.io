import React, { useMemo } from 'react';
import moment from 'moment-timezone';
import classNames from 'classnames/bind';

import styleTypo from 'styles/base/typography.module.scss';
import styleCardList from 'styles/component/card-list.module.scss';
import { getLocaleTimeStr } from 'modules/util/date';

const cxCardList = classNames.bind(styleCardList);
const cxTypo = classNames.bind(styleTypo);

interface ContentProps {
  title: string;
  date: moment.Moment;
  creator: string;
  description: string;
}

function Content({ title, date, creator, description }: ContentProps) {
  const className = useMemo(() => cxCardList('content'), []);

  const titleClassName = useMemo(() => cxTypo('headline-6'), []);
  const subClassName = useMemo(() => cxTypo('cpation'), []);
  const descClassNAme = useMemo(() => cxTypo('body-1'), []);

  const dateStr = useMemo(() => getLocaleTimeStr(date), []);

  return (
    <div className={className}>
      <p id="title" className={titleClassName}>
        {title}
      </p>
      <p id="sub" className={subClassName}>
        {dateStr}
        <br />
        {creator}
      </p>
      <p id="desc" className={descClassNAme}>
        {description}
      </p>
    </div>
  );
}

export default Content;
