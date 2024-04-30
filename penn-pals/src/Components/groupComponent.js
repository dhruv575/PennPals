import React, { useState, useEffect } from 'react';
import GraphComponent from './graphComponent';

const styles = {
  activityBox: {
    marginBottom: '20px',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#ADD8E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Add drop shadow
    margin: '1rem 2rem', // Add margin around the larger box
  },
  dayBox: {
    marginBottom: '10px',
    padding: '10px',
    maxWidth: '12%',
    border: '1px solid #ffa500',
    borderRadius: '3px',
    backgroundColor: '#FFF8E1',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Add drop shadow for inner boxes
  },
};

const GroupComponent = ({ activities }) => {
  if (!Array.isArray(activities)) {
      console.error("Invalid activities data:", activities);
      return <div>Error: Activities data is not an array.</div>;
  }

  return (
      <div>
          {activities.map((activity, index) => (
              <ActivityBox key={index} activity={activity} />
          ))}
      </div>
  );
};


  const ActivityBox = ({ activity }) => {
    const { Activity, Days } = activity;
    return (
      <div style={styles.activityBox}>
        <h2>{Activity}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {Object.entries(Days).map(([day, participants]) => (
            <DayBox key={day} day={day} participants={participants} />
          ))}
        </div>
      </div>
    );
  };

const DayBox = ({ day, participants }) => {
  return (
    <div style={styles.dayBox}>
      <h3>{day}</h3>
      <GraphComponent userIDs={participants}/>
    </div>
  );
};


export default GroupComponent;
