import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const SignUp = async () => {

  const loggedIn = await getLoggedInUser();
  if(loggedIn) redirect('/')

  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up"/>
    </section>
  )
}

export default SignUp