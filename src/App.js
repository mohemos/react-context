import React, { useContext } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import {GlobalContext} from './utils/context';

function App() {
  const {config} = useContext(GlobalContext);

  console.log(config);

  return <div>
      {config.showHeader && <Header />}
       <Body />
      {config.showFooter && <Footer />}
  </div>
}

export default App;
