import React, { useMemo } from 'react';
import classNames from 'classnames/bind';

import styleTypo from 'styles/base/typography.module.scss';
import styleCardList from 'styles/component/card-list.module.scss';

const cxCardList = classNames.bind(styleCardList);
const cxTypo = classNames.bind(styleTypo);

interface KeywordProps {
  words: string[];
}

function Keyword({ words }: KeywordProps) {
  const className = useMemo(() => cxCardList('keywords'), []);
  const buttonClassName = useMemo(() => cxTypo('button'), []);

  const $words = useMemo(() => {
    return words.map((word) => (
      <span key={word} className={buttonClassName}>
        {word}
      </span>
    ));
  }, [words, buttonClassName]);

  return (
    <div className={className}>
      <hr />
      {$words}
    </div>
  );
}

export default Keyword;
