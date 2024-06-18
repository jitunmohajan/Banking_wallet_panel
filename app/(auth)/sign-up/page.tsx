import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';

const SignUp = async () => {
  const loogedInUser = await getLoggedInUser();
  console.log(loogedInUser);
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up"/>
    </section>
  )
}

export default SignUp