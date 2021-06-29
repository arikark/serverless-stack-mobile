import React from 'react';

import amplifyConfigure from './src/app/aws/amplifyConfigure';
import { Provider } from 'react-redux'
import store from './src/app/store';
import Navigators from './src/navigators/Navigators';
import CustomThemeProvider from './src/themes/CustomThemeProvider'

amplifyConfigure()

export default function App() {
return (
  <Provider store={store}>
    <CustomThemeProvider>
      <Navigators />
    </CustomThemeProvider>
  </Provider>
  );
}
