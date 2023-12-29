import { useSearchParams } from 'next/navigation'
import LoginCard from '../components/LoginCard';

const Login = ({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined }}) => {

  //@ts-ignore
  return <LoginCard client_id={ process.env.CLIENT_ID }/>;

};

export default Login;
