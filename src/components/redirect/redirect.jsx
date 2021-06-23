import { useRouter } from 'next/router';

function RedirectPage(props) {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      router.push(`${props.path}`);
    }, 800);
  }

  return <>Loading...</>;
}

export default RedirectPage;
