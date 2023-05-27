// import '../styles/globals.css'
// import '../styles/Main.scss'
import { ReactNode, ReactChildren, ReactChild, FC } from 'react'
import { Button } from '@mui/material'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useEffect } from 'react'

type Props = { title: string }
const SidebarListing: FC<Props> = ({children, title}) => {

  useEffect(() => {}, []);
  return (
  
  <div>{title}</div>

  )
}


export default SidebarListing