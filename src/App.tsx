import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';

import useArtwork from 'modules/hook/useArtwork';
import styleBase from 'styles/base/base.module.scss';
import Body from 'section/body';

const cxBase = classNames.bind(styleBase);

function App() {
  const artwork = useArtwork();
  const className = useMemo(() => cxBase('App'), []);

  useEffect(() => {
    artwork.initialize();
  }, []);

  return (
    <div className={className}>
      <Body />
    </div>
  );
}

export default App;
