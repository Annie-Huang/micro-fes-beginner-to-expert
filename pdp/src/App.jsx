import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.scss';
import Header from 'home/Header';
import Footer from 'home/Footer';
import SafeComponent from './SafeComponent';
import PDPContent from './PDPContent';

const App = () => (
  <BrowserRouter>
    <div className='text-3xl mx-auto max-w-6xl'>
      <Header />
      <div className='my-10'>
        <Routes>
          <Route path='/product/:id' element={<PDPContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

/*const App = () => (
  <div className='text-3xl mx-auto max-w-6xl'>
    <SafeComponent>
      <Header />
    </SafeComponent>
    <div className='my-10'>
      <PDPContent />
    </div>
    <Footer />
  </div>
);*/

/*const Header = React.lazy(() => import('home/Header'));
const App = () => {
  // Note04 - Before we click button to show the Header.jpg
  // Note05 - After we click button to show the Header.jpg
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      {showHeader && (
        <Suspense fallback={<div>Loading</div>}>
          <Header />
        </Suspense>
      )}
      <button className='text-3xl p-5' onClick={() => setShowHeader(true)}>
        Show The Header
      </button>
      <div className='my-10'>Home Page Content</div>
      <Footer />
    </div>
  );
};*/
ReactDOM.render(<App />, document.getElementById('app'));
