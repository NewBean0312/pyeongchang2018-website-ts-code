import React from 'react';
import Header from './components/common/Header';
import Slider from './components/Slider';
import Display from './components/Display';

const App:React.FC = () => {
  return (
    <div id="wrap">
      <Header />
      <Slider />
      <Display />
    </div>
  );
}

export default App;