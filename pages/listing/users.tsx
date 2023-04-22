import type { NextPage } from 'next'
import { SyntheticEvent } from 'react';
import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import styled from 'styled-components'

import CustomButton from '../../widgets/Button'


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import SearchBar from '../../components/SearchBar';
import Debounce from '../../utils/Debounce';
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

// const TomatoButton = styled(CustomButton)`
//   background: tomato;
// `



const Users: NextPage = ({ data }) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false, 
    });
    const toggleDrawer = (anchor, open) => (event) => {
        console.log('ok')
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const [searchText, setSearchText] = React.useState('');
    const [listData, setListData] = React.useState([]);



    const handleChange = (value:string) => {
        setSearchText(value);
    };

    const handleSearch = (searchText:string) => {

        let datas:any =[...data];
        console.log(listData)
        let text = searchText?.toLowerCase();
       if(text !== "") datas=datas.filter(val=>val?.fullName?.toLowerCase()?.includes(text))
       setListData(datas)
       
    };

    React.useEffect(()=>{
        setListData(data)
      },[data])


    Debounce(() => handleSearch(searchText), 1000, searchText);


   
    return (
        <div className='bg-zinc-100' >
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="container min-h-screen mx-auto">
            <Button> <Link href="/home">Home</Link></Button>
                <h2 className='text-3xl text-center py-8'>Find Course</h2>

                <div style={{display:'flex',justifyContent:'center', alignItems:"center", marginTop:10,marginBottom:30}}>
                <SearchBar onChange={val=>handleChange(val)} height="50px" background='#f2f2f2'  borderRadius='8px' width='80%'/>
                </div>

                {/* <CenterWrapper height={"100%"} background="#fff" borderRadius={"10px"}> */}
                <div className="grid grid-cols-4 gap-4 hover:grid-cols-4">
                    {listData && listData.length > 0 && listData.map((val, index) =>
                        <CardWrapper key={index} height="280px" background="#fff" borderRadius="5px">

                            <Profilecard height="100px" background="#eee">
                                <div className='roundImageWrapper' >
                                    <Image
                                        layout="fixed"
                                        src="/profile.jpg"
                                        alt="Picture of the author"
                                        // layout="fill"
                                        objectFit="cover"
                                        quality={100}
                                        width={80}
                                        height={80}
                                    // placeholder="blur"
                                    />
                                </div>
                            </Profilecard>


                            <CenterWrapper className='pt-10' background="#fff" borderRadius={"10px"}>

                                <p>{val.fullName}</p>
                                <p>{val.email}</p>
                                <p>Programmer</p>
                                <p>5 Years</p>

                                <CustomButton onClick={
                                    toggleDrawer('right', true)


                                } type='button' width={'80%'} title={'Book Now'}>{'right'}</CustomButton>


                                {/* <CustomButton width={'60%'} title="Book Slots" type='button' /> */}
                            </CenterWrapper>

                        </CardWrapper>

                    )}

                    <Drawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                    >
                        <Box
                            sx={{ width: 450 }}
                            role="presentation"
                            onClick={toggleDrawer('right', false)}
                            onKeyDown={toggleDrawer('right', false)}
                        >



                        </Box>
                    </Drawer>
                    {/* <CardWrapper height="280px" background="#fff" borderRadius="5px">01</CardWrapper>
                    <CardWrapper height="280px" background="#fff" borderRadius="5px">01</CardWrapper>
                    <CardWrapper height="280px" background="#fff" borderRadius="5px">01</CardWrapper>
                    <CardWrapper height="280px" background="#fff" borderRadius="5px">01</CardWrapper> */}


                </div>
                {/* </CenterWrapper> */}

            </div>





            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
   
        </div>
    )
}



export async function getStaticProps() {

 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/users`)
    const data = await res.json()
    console.log(process.env.NEXT_PUBLIC_DEV_ID);
    console.log(process.env.NEXT_PUBLIC_PROD_ID)
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}
export default Users;