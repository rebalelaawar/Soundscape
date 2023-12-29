import { useSearchParams } from 'next/navigation'
import LoginCard from './components/LoginCard';
import Link from 'next/link';



export default function Home({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined }}) {

  
  return <div>
    THIS IS THE HOME PAGE PLEASE <Link href={ '/login' }>LOGIN</Link>
  </div>;

};
