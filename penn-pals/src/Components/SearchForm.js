import * as React from 'react';
import { Typography, Checkbox, FormGroup, FormControlLabel, Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';

const activities = [
  'Swimming', 'Hiking', 'Painting', 'Reading', 'Cooking', 
  'Yoga', 'Cycling', 'Gardening', 'Photography', 'Dancing'
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function UserFormDialog() {
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [selectedActivities, setSelectedActivities] = React.useState([]);
  const [availableDays, setAvailableDays] = React.useState([]);

// Function to toggle activities
const handleToggleActivity = (activity) => {
    setSelectedActivities(prev => 
      prev.includes(activity) ? prev.filter(a => a !== activity) : [...prev, activity]
    );
};

// Function to toggle days
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
          backgroundColor: 'orange',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
        }}
      >
        Join Activities
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h6" marginBottom={2}>User Information Form</Typography>
          <TextField
            fullWidth
            label="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            margin="normal"
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
