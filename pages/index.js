import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSession ,  signIn, signOut } from 'next-auth/react'
import tw from "tailwind-styled-components"
import { Header } from '../components/Header'
import { Users } from '../components/Users'
import { githubUsers } from '../components/data'


export default function Home() {

  
  
  return (
      <YoMoPresence>
          <Header />
          <YoMoAdmin>
            <Users githubUsers={githubUsers}/>
          </YoMoAdmin>
      </YoMoPresence>
  )
}

const YoMoPresence = tw.main`w-full h-screen flex flex-col `
const YoMoAdmin = tw.section`w-full h-full flex`
