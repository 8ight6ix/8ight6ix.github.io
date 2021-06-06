import React, { useEffect, useMemo } from 'react';

import Artwork from 'modules/store/hook/artwork';
import cx from 'styles';

function App() {
  const artwork = Artwork();

  const appClassName = useMemo(() => cx('App'), []);
  const bodyClassName = useMemo(() => cx('body'), []);

  useEffect(() => {
    artwork.initialize();
  }, []);

  return (
    <div className={appClassName}>
      <div className={bodyClassName} />
    </div>
  );
}

export default App;
