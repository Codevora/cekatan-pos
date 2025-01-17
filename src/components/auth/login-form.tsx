import {CardWrapper} from "@/components/auth/card-wrapper";

export const LoginForm = () => {
 return (
  <CardWrapper
   headerLabel="Login"
   backButtonLabel="Belum punya akun?"
   backButtonHref="/register"
   showSocial
   >
   Login Form!
  </CardWrapper>
 );
};
