import React, { useEffect, useState } from 'react';
import { Typography, Checkbox, FormGroup, FormControlLabel, Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';

const activities = [
  'Swimming', 'Hiking', 'Painting', 'Reading', 'Cooking', 
  'Yoga', 'Cycling', 'Gardening', 'Photography', 'Dancing'
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function UserFormDialog() {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);
  const [activityGroups, setActivityGroups] = useState([]);

  useEffect(() => {
    const storedActivities = localStorage.getItem('activityGroupsData');
    if (storedActivities) {
      setActivityGroups(JSON.parse(storedActivities));
    } else {
      localStorage.setItem('activityGroupsData', JSON.stringify([]));
    }
  }, []);

  const handleToggleActivity = (activity) => {
    setSelectedActivities(prev => 
      prev.includes(activity) ? prev.filter(a => a !== activity) : [...prev, activity]
    );
  };

  const handleToggleDay = (day) => {
    setAvailableDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log('User Name:', userName);
    console.log('Selected Activities:', selectedActivities);
    console.log('Available Days:', availableDays);

    const updatedActivityGroups = activityGroups.map(group => {
      const newDays = {...group.Days};
      selectedActivities.forEach(activity => {
        if (group.Activity === activity) {
          availableDays.forEach(day => {
            if (!newDays[day]) {
              newDays[day] = [];
            }
            if (!newDays[day].includes(userName)) {
              newDays[day].push(userName);
            }
          });
        }
      });
      return {...group, Days: newDays};
    });

    localStorage.setItem('activityGroupsData', JSON.stringify(updatedActivityGroups));
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{
          marginRight: '20px',
          height: '40px',
          fontSize: '20px',
          padding: '25px',
          backgroundColor: '#FFF8E1',
          color: 'black',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
        }}
      >
        Join Activities
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ backgroundColor: '#FFF8E1' }}>
          <Typography sx={{ fontSize: '22px', marginBottom: '8px', fontWeight: 'bold' }}>
            Join Some Activities!
          </Typography>
          <TextField
            autoFocus 
            margin="dense" 
            id="name" 
            type="text" 
            fullWidth 
            variant="standard"
            label="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FormGroup>
            <Typography variant="subtitle1">Activities Interested In:</Typography>
            {activities.map((activity, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selectedActivities.includes(activity)}
                    onChange={() => handleToggleActivity(activity)}
                  />
                }
                label={activity}
              />
            ))}
          </FormGroup>
          <FormGroup>
            <Typography variant="subtitle1">Days Available:</Typography>
            {days.map((day, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={availableDays.includes(day)}
                    onChange={() => handleToggleDay(day)}
                  />
                }
                label={day}
              />
            ))}
          </FormGroup>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
