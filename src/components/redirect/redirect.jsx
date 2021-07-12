import { useRouter } from 'next/router';
import Loader from '../loader/loader'

function RedirectPage(props) {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      router.push(`${props.path}`);
    }, 800);
  }



  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh"}}>
      <Loader/>
    </div>
  )
  
}

export default RedirectPage;
