// import '../styles/globals.css'
// import '../styles/Main.scss'
import * as React from 'react';


import axios from 'axios';

import { toast } from 'react-toastify';

import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material'


import type { AppProps } from 'next/app'
import Link from 'next/link'
import CustomButton from '../../../widgets/Button';


function EditCourseForm({ Component, pageProps }: AppProps) {


  const [courseName, setName] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
};

const createCourse=()=>{
  // Send a POST request
axios({
  method: 'post',
  url: `${process.env.NEXT_PUBLIC_API}/courses/create?name=${courseName}`,
 
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
}).then((v)=>{
  console.log(v)
  toast.success("Success !", {
    position: toast.POSITION.TOP_RIGHT
  });

  // toast.error("Error Notification !", {
  //   position: toast.POSITION.TOP_LEFT
  // });

  // toast.warn("Warning Notification !", {
  //   position: toast.POSITION.BOTTOM_LEFT
  // });

  // toast.info("Info Notification !", {
  //   position: toast.POSITION.BOTTOM_CENTER
  // });
}).catch((e)=>{
  toast.error("Error !", {
    position: toast.POSITION.TOP_RIGHT
  });
})
}


  return (
    <>


  <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Course Name"
            type="text"
            fullWidth
            variant="standard"
            value={courseName}
            onChange={handleChange}
          />
          <Button onClick={()=>createCourse()}>Update</Button>
    </>
  )
}

export default EditCourseForm