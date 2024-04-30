import React, { useEffect, useState } from 'react';
import GraphComponent from './Components/graphComponent';
import GroupComponent from './Components/groupComponent';
import Header from './Components/header'
import defaultUserData from './Data/Social_Network.json'
import defaultActivityGroupsData from './Data/Activities.json'


const App = () => {
  const [userData, setUserData] = useState([]);
  const [activityGroupsData, setActivityGroupsData] = useState([]);

  useEffect(() => {
    const loadUserData = localStorage.getItem('userData');
    const loadActivityGroupsData = localStorage.getItem('activityGroupsData');

    if (loadUserData && loadActivityGroupsData) {
      setUserData(JSON.parse(loadUserData));
      setActivityGroupsData(JSON.parse(loadActivityGroupsData));
    } else {
      // Initialize Local Storage with default data
      localStorage.setItem('userData', JSON.stringify(defaultUserData));
      localStorage.setItem('activityGroupsData', JSON.stringify(defaultActivityGroupsData));
      setUserData(defaultUserData);
      setActivityGroupsData(defaultActivityGroupsData);
    }
  }, []);

  return (
    <div>
      <Header />
      <GroupComponent activities={activityGroupsData} />
    </div>
  );
}

export default App;
