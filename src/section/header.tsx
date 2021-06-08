import React, { useMemo } from 'react';
import classNames from 'classnames/bind';

import { CONFIG } from 'constant';
import styleTypo from 'styles/base/typography.module.scss';
import styleHeader from 'styles/layout/header.module.scss';

const cxTypo = classNames.bind(styleTypo);
const cxHeader = classNames.bind(styleHeader);

function Header() {
  const className = useMemo(() => cxHeader('header'), []);

  const title = useMemo(() => CONFIG.title, []);
  const titleClassName = useMemo(() => cxTypo('headline-6'), []);

  const subTitle = useMemo(() => CONFIG.subTitle, []);
  const subTitleClassName = useMemo(() => cxTypo('subtitle-1'), []);

  return (
    <div className={className}>
      <div id="wrapper">
        <p id="title" className={titleClassName}>
          {title}
        </p>
        <p id="sub-title" className={subTitleClassName}>
          {subTitle}
        </p>
      </div>
    </div>
  );
}

export default Header;
