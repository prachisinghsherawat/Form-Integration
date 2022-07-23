import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export const Forms =() => {

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    

    return (
      
    <Box id='box'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '28ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField id="outlined-search" label="Candidate Name" type="search" />

        <TextField id="outlined-search" label="Candidate Email" type="search" />
        
        <TextField
          id="outlined-number"
          label="Candidate Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField id="outlined-search" label="Source" type="search" />

        <TextField id="outlined-search" label="Previous Organization" type="search" />

        <TextField id="outlined-search" label="Referral Employee Email" type="search" />

        <TextField id="outlined-search" label="Skill" type="search" />

        <TextField id="outlined-search" label="Total Experience" type="search" />

        <TextField id="outlined-search" label="NP" type="search" />

        <TextField id="outlined-search" label="Status" type="search" />


        <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-controlled-open-select-label">Is Join</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Is Join"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>True</MenuItem>
          <MenuItem value={20}>False</MenuItem>
        </Select>
        </FormControl>


        <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-controlled-open-select-label">Offered</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Offered"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>True</MenuItem>
          <MenuItem value={20}>False</MenuItem>
        </Select>
        </FormControl>


        <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-controlled-open-select-label">Dropped</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Dropped"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>True</MenuItem>
          <MenuItem value={20}>False</MenuItem>
        </Select>
        </FormControl>
      
        
      </div>
     
    </Box>
  );
}



