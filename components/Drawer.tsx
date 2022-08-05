import type { NextPage } from 'next'
import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import styled from 'styled-components'
import { width } from '@mui/system';
// import variables from '../../styles/variables.module.scss'


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';




const Drawers: NextPage = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });




    return (
        <Drawer
            anchor={'right'}
            open={state['right']}
        // onClose={toggleDrawer('right', false)}
        >
            <Box
                sx={{ width: 450 }}
                role="presentation"
            // onClick={toggleDrawer('right', false)}
            // onKeyDown={toggleDrawer('right', false)}
            >


            </Box>
        </Drawer>
    )
}

export default Drawers;