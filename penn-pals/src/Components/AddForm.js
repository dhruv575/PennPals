import * as React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const activities = [
  'Running',
  'Boxing',
  'Dancing',
  'Photography',
  'Painting',
];

const users = [
  {
      "_id": 1,
      "name": "Heather Murray",
      "email": "moorerobert@ford.info",
      "friends": [
          14,
          7
      ]
  },
  {
      "_id": 2,
      "name": "Felicia Tucker",
      "email": "hickskristen@gmail.com",
      "friends": []
  },
  {
      "_id": 3,
      "name": "Anna Lewis",
      "email": "daniel26@stewart-petersen.com",
      "friends": [
          8,
          4,
          9
      ]
  },
  {
      "_id": 4,
      "name": "Bryce Martin",
      "email": "wilsonmarco@combs.com",
      "friends": [
          4
      ]
  },
  {
      "_id": 5,
      "name": "Hector Bell",
      "email": "griffinbrian@gmail.com",
      "friends": [
          3,
          12,
          14,
          6,
          16
      ]
  },
  {
      "_id": 6,
      "name": "Kenneth Beck",
      "email": "nbell@yahoo.com",
      "friends": [
          7,
          20,
          9,
          14,
          19
      ]
  },
  {
      "_id": 7,
      "name": "Raymond Trevino",
      "email": "dfreeman@yahoo.com",
      "friends": [
          14,
          5
      ]
  },
  {
      "_id": 8,
      "name": "Tammy Griffin",
      "email": "bnelson@yahoo.com",
      "friends": [
          20,
          11,
          5,
          18
      ]
  }
];

export default function FormDialog({ Title }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [friends, setFriends] = React.useState([]);

  // check if works
  const handleChange = (event) => {
    const selectedIds = event.target.value;
    setFriends(selectedIds);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    setOpen(false);
    const c = {
      name,
      email,
      friends,
    };
    console.log(JSON.stringify(c));
    // no db, send it to the local data
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
        {Title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          padding: '00px',
          backgroundColor: '#D2B48C',
        }}
      >
        <DialogContent
          sx={{
            backgroundColor: '#EEE6D8',
          }}
        >
          <Typography
            sx={{
              fontSize: '22px',
              marginBottom: '8px',
              fontWeight: 'bold',
            }}
          >
            Looking for friends to do things together?
          </Typography>
          <DialogContentText>
            Let us know more about you by filling out this basic form!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="text"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* dropdown of existing users */}
          <FormControl fullWidth variant="standard" size="small">
            <InputLabel>Friends</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={friends}
              onChange={handleChange}
              label="Friends"
            >
              {users.map((user) => (
                <MenuItem key={user._id} value={user._id}>
                  {user.name}
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
