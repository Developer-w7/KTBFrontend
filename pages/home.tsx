// import '../styles/globals.css'
// import '../styles/Main.scss'

import { Button } from '@mui/material'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Header from '../components/Client/Header'
import Footer from '../components/Client/Footer'
import { useLazyGetSummaryQuery } from "../src/services/article";
import { useEffect } from 'react'
import { CakeView } from '../src/services/features/cake/CakeView'
import { IcecreamView } from '../src/services/features/icecream/IcecreamView'
import { UserView } from '../src/services/features/user/UserView'
import SidebarListing from '../components/Client/Widgets/SidebarListing'
import SidebarWrap from '../components/Client/SidebarWrapper'
function Home({ Component, pageProps }: AppProps) {

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    handleSubmit();
  }, []);


  const handleSubmit = async () => {
    // const { data } = await getSummary({ articleUrl: 'https://www.jsmastery.pro/' });
    // console.log(data);
  };
  return (
    <>
      <Header/>
      <div className="container mx-auto min-h-vh-80 bg-slate-100">
        <div className="container-1">
        <div className="col-3 bg-amber-300">
          <SidebarWrap>
            <SidebarListing title="test"/>
          </SidebarWrap>
        </div>
        <div className="col-9 bg-amber-400">b</div>

        </div>
      {/* <div className="grid grid-cols-2 gap-1">
  <div>   <CakeView />
      <IcecreamView />
      <UserView /></div>
  
  <div>   <CakeView />
      <IcecreamView />
      <UserView /></div>
</div> */}


      </div>
      <Footer/>
    
    </>
  )
}

export default Home