import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import ProductCard from './components/LoginCard'
import querystring from 'querystring';
import crypto from 'crypto';
import LoginCard from './components/LoginCard';



export default function Home() {

  return (
    <>
    <LoginCard client_id={process.env.CLIENT_ID}> </LoginCard>
    </>
  
  )
}
