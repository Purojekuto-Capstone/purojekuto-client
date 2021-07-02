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
    <>
    <div className='loader__container'>
      <Loader/>
    </div>
    </>
  )
  
}

export default RedirectPage;
