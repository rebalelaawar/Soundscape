import { useSearchParams } from 'next/navigation'
import LoginCard from './components/LoginCard';
import Link from 'next/link';

export default function Home({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined }}) {
  return <>
    <div id="flex" style={{ textAlign: 'center' }}>
      <div style={{ marginTop: '50px' }}>
        <h1><strong>Soundscape</strong></h1>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <Link id="log" href={'/login'} style={{ display: 'inline-block', textDecoration: 'none', padding: '7px', backgroundColor: 'black', color: 'white' }}>LOGIN</Link>
      </div>
    </div>
  <div>
    
  </div>
  </>
  
    
  ;
}