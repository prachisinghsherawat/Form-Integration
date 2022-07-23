import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const Forms =() => {

    const [candidateDetails , setCandidateDetails] = useState({
        
        candidate_name: "",
        candidate_email: "",
        candidate_number:  "",
        source: "",
        previous_organization: "",
        referral_employee_email: "",
        skill: "",
        total_exp: "",
        NP: "",
        status: "",
        isjoin: false,
        offered: false,
        dropped: false,
    })

    const HandleCandidateDetails = (e) => {

        const {name , value} = e.target;
        setCandidateDetails({...candidateDetails ,[name]: value})
    }

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

        <TextField name='candidate_name' id="outlined-search" label="Candidate Name" type="search" />

        <TextField name='candidate_email' id="outlined-search" label="Candidate Email" type="search" />
        
        <TextField
          id="outlined-number"
          name='candidate_number'
          label="Candidate Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField name='source' id="outlined-search" label="Source" type="search" />

        <TextField name='previous_organization' id="outlined-search" label="Previous Organization" type="search" />

        <TextField name='referral_employee_email' id="outlined-search" label="Referral Employee Email" type="search" />

        <TextField name='skill' id="outlined-search" label="Skill" type="search" />

        <TextField name='total_exp' id="outlined-search" label="Total Experience" type="search" />

        <TextField name='NP' id="outlined-search" label="NP" type="search" />

        <TextField name='status' id="outlined-search" label="Status" type="search" />


        <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-controlled-open-select-label">Is Join</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          name='isjoin'
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
          name='offered'
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
          name='dropped'
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



