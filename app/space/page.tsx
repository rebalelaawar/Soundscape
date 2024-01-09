import Link from 'next/link';
import Wrapper from './appWrapper';
const Page = async ({ searchParams } : any ) => { 
    if ( "code" in searchParams ) {
        //do token stuff again
        return <Wrapper token={"put it here"}/>;
    };
    return <div>Please <Link href="/login">Login</Link></div>;
};
export default Page;