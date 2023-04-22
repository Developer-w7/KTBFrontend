import type { NextPage } from 'next'

import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import styled from 'styled-components'

import CustomButton from '../../../widgets/Button';


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

import { toast } from 'react-toastify';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';

import CreateCourseForm from './CreateCourseForm';
import EditCourseForm from './EditCourseForm';
import axios from 'axios';

// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';


interface User {
    background?: string;
    height?: string;
    borderRadius?: string;
}
const CenterWrapper = styled.div(
    ({ height, background, borderRadius }: User) => `
  background: ${background};
  justify-content: center;
  align-items: center;
  display: flex;
  height: ${height ? height : 'auto'};
  flex-direction: column;
  width:100%;
  border-radius:${borderRadius};
`
)
const CardWrapper = styled.div(
    ({ height, background, borderRadius }: User) => `
    // align-items: center;
    // justify-content: center;
    // display: flex;
    min-height: ${height};
    border-radius:${borderRadius};

    background: ${background};
`
)
const Profilecard = styled.div(
    ({ height, background, borderRadius }: User) => `
    align-items: center;
    justify-content: center;
    display: flex;
    min-height: ${height};
    border-radius:${borderRadius};
     position:relative;
    background: ${background};
`
)

// const TomatoButton = styled(Button)`
//   background: tomato;
// `



const ListSubCourses: NextPage = ({ data, id }) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false, 
    });
    const [editOpen, seteEditOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [faqs, setFaqs] = React.useState(null);
    
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleEditOpen = () => {
        seteEditOpen(true);
      };
    const handleEditClose = () => {
        seteEditOpen(false);
      };


    const handleChange = (event: SelectChangeEvent) => {
        setCourse(event.target.value as string);
    };

    const getFaqs=(id)=>{
        // Send a POST request
      axios({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_API}/faqsById?id=${id}`,
      }).then((v)=>{
        
        
        setFaqs(v.data);
        // toast.success("Success !", {
        //   position: toast.POSITION.TOP_RIGHT
        // });
      
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
    React.useEffect(()=>{getFaqs(id)},[id])
    return (
        <>
       
            

           
          
                <div className="grid grid-cols-1 gap-4 hover:grid-cols-1 ">
                   {console.log(faqs)}
                    {faqs && faqs.length > 0 &&  faqs.map((val, index) =>
                        <CardWrapper key={index} className="bg-gray-100 p-5"  borderRadius="5px">

                        <p>{val.question}</p>
                        <p>{val.answer}</p>
                             
                        <span onClick={()=>{handleEditOpen()}} style={{color:"blue"}} >Edit</span>
                           

                        </CardWrapper>

                    )}

           
             
            <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
           <CreateCourseForm/>
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
      <Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
           <EditCourseForm/>
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
         
        </DialogActions>
      </Dialog>

                </div>
               

            </>





        
        
    )
}

export default ListSubCourses;