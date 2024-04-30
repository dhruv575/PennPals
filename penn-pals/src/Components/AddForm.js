import React, { useState, useEffect } from 'react';
import {
  Typography, Button, TextField, Dialog, DialogActions, DialogContent,
  DialogContentText, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';

// Initialize users from Local Storage or fallback to default data
const loadUsers = () => {
  const data = localStorage.getItem('userData');
  return data ? JSON.parse(data) : []; // Replace [] with your default users data if needed
}

export default function FormDialog({ title }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState(loadUsers());

  const handleChange = (event) => {
    setFriends(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    const newUser = {
      "User ID": name,
      Email: email,
      Friends: friends,
    };

    const updatedUsers = [...users, newUser];
    updatedUsers.forEach(user => {
      if (friends.includes(user['User ID']) && !user.Friends.includes(name)) {
        user.Friends.push(name);
      }
    });

    setUsers(updatedUsers);
    localStorage.setItem('userData', JSON.stringify(updatedUsers));
    setName('')
    setEmail('')
    setFriends([])
    setOpen(false);
  };

  useEffect(() => {
    setUsers(loadUsers());
  }, []);

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
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' 
        }}
      >
        Add friends
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ backgroundColor: '#FFF8E1' }}>
          <Typography sx={{ fontSize: '22px', marginBottom: '8px', fontWeight: 'bold' }}>
            Looking for friends to do things together?
          </Typography>
          <DialogContentText>
            Let us know more about you by filling out this basic form!
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField margin="dense" id="email" label="Email" type="text" fullWidth variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormControl fullWidth variant="standard">
            <InputLabel>Friends</InputLabel>
            <Select multiple value={friends} onChange={handleChange} label="Friends">
              {users.map((user) => (
                <MenuItem key={user['User ID']} value={user['User ID']}>
                  {user['User ID']}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
