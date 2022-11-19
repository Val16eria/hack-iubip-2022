import React from 'react';
import Header from './components/Header/Header';
import './components/css/App.css';
import Convert from './components/Convert/Convert';
// import Box2 from './components/Main/Box-2';
// import Box3 from './components/Main/Box-3';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Convert />
    </div>
  );
}

export default App;