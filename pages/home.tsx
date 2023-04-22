// import '../styles/globals.css'
// import '../styles/Main.scss'

import { Button } from '@mui/material'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function Home({ Component, pageProps }: AppProps) {
  return (
    <>
    <Button><Link href="/listing/users">List Users</Link></Button>
    <Button><Link href="/listing/courses">List Courses</Link></Button>
    <Button><Link href="/listing/instructors">List Instructor</Link></Button>
    
    
    </>
  )
}

export default Home