import React, { useEffect, useState } from 'react';
import GraphComponent from './Components/graphComponent';
import Header from './Components/header'
import userData from './Data/FakeUsers_20.json'


const App = () => {
  return (
    <div>
      <Header />
      <GraphComponent users={userData} />
    </div>
  );
}

export default App;
