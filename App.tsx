import React, {FC, createContext} from 'react';

import {Provider} from 'react-redux';

import {store, useAppSelector} from './src/store';

import Navigation from './src/navigation';

export const ThemeContext: any = createContext(null);

const App: FC = () => {
  // const [bgColor, setBgColor] = useState('blue');

  return (
    <Provider store={store}>
      {/* <ThemeContext.Provider value={{bgColor, setBgColor}}> */}
      <Navigation />
      {/* </ThemeContext.Provider> */}
    </Provider>
  );
};

export default App;
