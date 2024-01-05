import { useSearchParams } from 'next/navigation'
import LoginCard from './components/LoginCard';
import Link from 'next/link';



export default function Home({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined }}) {

  
  return <div>
    <h1>THIS IS THE HOME PAGE </h1>
     <Link id="log" href={ '/login' }>LOGIN</Link>
  </div>;

};
