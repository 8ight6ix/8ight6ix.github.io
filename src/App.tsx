import React, { useEffect, useMemo } from 'react';

import Artwork from 'modules/store/hook/artwork';
import Body from 'section/body';
import cx from 'styles';

function App() {
  const artwork = Artwork();
  const className = useMemo(() => cx('App'), []);

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
