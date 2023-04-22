// @ts-nocheck 

import type { NextPage } from 'next'
import { useState, useEffect, useRef } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import styled from 'styled-components'
import variables from '../../styles/variables.module.scss'
import TextInput from '../../widgets/TextInput'
import Spacer from '../../widgets/Spacer'
import Button from '../../widgets/Button'
import axios from 'axios'


interface User {
    background: string;
    height: string;
    borderRadius: string;
}
const CenterWrapper = styled.div(
    ({ height, background, borderRadius }: User) => `
  background: ${background};
  justify-content: center;
  align-items: center;
  display: flex;
  height: ${height};
  flex-direction: column;
  border-radius:${borderRadius};
`
)


// const TomatoButton = styled(Button)`
//   background: tomato;
// `

const Register: NextPage = () => {

    const textInput = useRef<HTMLInputElement>(null);

    const [User_Name, setName] = useState("");
    const [User_Email, setEmail] = useState("");
    const [User_Password, setPassword] = useState("");
    const [User_Rep_Password, setRepPassword] = useState("");

    const handleChange = (e) =>{
        if(e.target.name === "User_Name")
         setName(e.target.value);
         else if(e.target.name === "User_Email")
         setEmail(e.target.value);
         else if(e.target.name === "User_Password")
         setPassword(e.target.value);
         else if(e.target.name === "User_Rep_Password")
         setRepPassword(e.target.value);
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(User_Password !== User_Rep_Password){
          console.error("Password Mismatch Error")
        }
        if(User_Password === "" || User_Rep_Password === ""){
            console.error("Password Empty Error")
        }
        let data={user_name:User_Name,email:User_Email,password:User_Password}
        let url ='http://localhost:5001/insert';
                  axios.post(url,data).then((res)=>{
                  console.log(res)
                  }).catch((e)=>{console.log(e)})

                  console.log(e)
                  }


    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-row">
                <div className="basis-1/2 min-h-screen relative">
                    <Image
                        // layout="responsive"
                        src="/ben-white-EMZxDosijJ4-unsplash.jpg"
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    // placeholder="blur"
                    />
                </div>
                <div className="basis-1/2 p-20 bg-zinc-100">
                    <CenterWrapper height={"auto"} background="#fff" borderRadius={"10px"}>
                        <Spacer height={'20px'} />
                        <h2 className='text-center text-sm md:text-2xl lg:text-3xl '>Sign Up</h2>
                        <Spacer height={'20px'} />
                        <form onSubmit={(e)=>{handleSubmit(e)}} style={{width:'100%'}}> 
                        <CenterWrapper height={"100%"} background="#fff" borderRadius={"10px"}>
                       
                      
                        <TextInput name="User_Name" value={User_Name} onChange={(v)=>handleChange(v)} width={'80%'} height={'50px'} placeholder='Name' />
                        
                        <Spacer height={'10px'} />
                        <TextInput name="User_Email" value={User_Email} onChange={(v)=>handleChange(v)} width={'80%'} height={'50px'} placeholder='Email' />
                        
                        <Spacer height={'10px'} />

                        <TextInput name="User_Password" type="password" value={User_Password} onChange={(v)=>handleChange(v)} width={'80%'} height={'50px'} placeholder='Password' />
                        <Spacer height={'10px'} />

                        <TextInput name="User_Rep_Password" type="password" value={User_Rep_Password} onChange={(v)=>handleChange(v)} width={'80%'} height={'50px'} placeholder='Repeat Password' />

                        <Spacer height={'20px'} />
                        <Button type="submit" width={'80%'} title="Register" />
                        <Spacer height={'20px'} />
                        </CenterWrapper>
                        </form>
                    </CenterWrapper>
                    {/* <button className="outline outline-offset-2 outline-blue-500">Button A</button> */}
                </div>

            </div>

            {/* <div className="grid-cols-6" >
        <Image
          layout="fill"
          src="/surface-E9NcsvbRVqo-unsplash.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />


        <main className={styles.main}>

        </main>


      </div> */}


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
        </>
    )
}

export default Register
