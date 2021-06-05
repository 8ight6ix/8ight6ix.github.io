import React, { useEffect } from 'react';

import Artwork from 'modules/store/hook/artwork';

function App() {
  const artwork = Artwork();

  useEffect(() => {
    artwork.initialize();
  }, []);

  return <div className="App" />;
}

export default App;
