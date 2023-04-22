// import '../styles/globals.css'
// import '../styles/Main.scss'
import * as React from 'react';


import axios from 'axios';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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


function Toaster({ Component, pageProps }: AppProps) {


  const [courseName, setName] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
};




  return (
    <>
        <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
      
        closeOnClick
        pauseOnHover
      />
    </>
  )
}

export default Toaster