import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ProductCard from './components/LoginCard'
import querystring from 'querystring';
import crypto from 'crypto';
import LoginCard from './components/LoginCard';



export default function Home() {

  console.log("this is server code");

   

  return (
    <>
    <LoginCard client_id={process.env.CLIENT_ID} client_secret={process.env.CLIENT_ID}> </LoginCard>
    </>
  
  )
}
