import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';


export const Forms =() => {

    const [candidateDetails , setCandidateDetails] = React.useState({        
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


    const SubmitFormDetails = () => {

      axios.post("http://localhost:3000/candidateDetails",candidateDetails)

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

        <TextField name='candidate_name' id="outlined-search" label="Candidate Name" type="search" onChange={HandleCandidateDetails} />

        <TextField name='candidate_email' id="outlined-search" label="Candidate Email" type="search" onChange={HandleCandidateDetails}  />
        
        <TextField
          id="outlined-number"
          name='candidate_number'
          label="Candidate Number"
          type="number"
          onChange={HandleCandidateDetails} 
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField name='source' id="outlined-search" label="Source" type="search" onChange={HandleCandidateDetails}  />

        <TextField name='previous_organization' id="outlined-search" label="Previous Organization" type="search" onChange={HandleCandidateDetails}  />

        <TextField name='referral_employee_email' id="outlined-search" label="Referral Employee Email" type="search" onChange={HandleCandidateDetails}  />

        <TextField name='skill' id="outlined-search" label="Skill" type="search" onChange={HandleCandidateDetails}  />

        <TextField name='total_exp' id="outlined-search" label="Total Experience" type="search" onChange={HandleCandidateDetails}  />

        <TextField name='NP' id="outlined-search" label="NP" type="search" onChange={HandleCandidateDetails} />

        <TextField name='status' id="outlined-search" label="Status" type="search" onChange={HandleCandidateDetails} />


        <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-controlled-open-select-label">Is Join</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          name='isjoin'
          defaultValue={candidateDetails.isjoin}
          label="Is Join"
          onChange={HandleCandidateDetails} 
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
        </Select>
        </FormControl>


        <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-controlled-open-select-label">Offered</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          defaultValue={candidateDetails.offered}
          name='offered'
          label="Offered"
          onChange={HandleCandidateDetails} 
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
        </Select>
        </FormControl>


        <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-controlled-open-select-label">Dropped</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          defaultValue={candidateDetails.dropped}
          name='dropped'
          label="Dropped"
          onChange={HandleCandidateDetails} 
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
        </Select>
        </FormControl>


        {/* ----------------------------- Button ----------------------------------- */}

        <Stack spacing={2} direction="row">

          <Button onClick={SubmitFormDetails} variant="contained">Submit</Button>
          
        </Stack>
      
        
      </div>
     
    </Box>



  );
}





