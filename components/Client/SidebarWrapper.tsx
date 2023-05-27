// import '../styles/globals.css'
// import '../styles/Main.scss'
import { ReactNode, ReactChildren, ReactChild, FC } from 'react'
import { Button } from '@mui/material'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useEffect } from 'react'

interface AuxProps {
    children: ReactChild | ReactChildren;
  }
function SidebarWrap({children}: AuxProps) {



  useEffect(() => {
    handleSubmit();
  }, []);


  const handleSubmit = async () => {
    // const { data } = await getSummary({ articleUrl: 'https://www.jsmastery.pro/' });
    // console.log(data);
  };
  return (
    <>
   
     {children}
    
    </>
  )
}

export default SidebarWrap