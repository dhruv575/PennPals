import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import React from 'react';
import FormDialog from './AddForm';
import SearchDialog from './SearchForm';

function Header() {
  return (
    <div
      className="flex w-full"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 'center',
        background: '#ADD8E6',
        borderBottom: '1px solid black',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
      }}
    >
      <div
        className="Pokemon"
        style={{
          marginLeft: '20px',
          marginRight: '30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div
          className="flex items-center p-4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '28rem',
          }}
        >
          <img
              src="https://i.ibb.co/Xy4hdfs/logo-rectangle-removebg-preview.png"
              alt="Penn Buddies Logo"
              className="w-1/6 h-auto logo"
              width="w00px"
              height="70px"
            />
        </div>
      </div>
      <div
        className="Pokemon"
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <FormDialog Title="Register Friends" />
        <SearchDialog/>
      </div>
    </div>
  );
}

export default Header;
